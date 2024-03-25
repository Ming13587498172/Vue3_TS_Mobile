<template>
  <var-skeleton v-if="loading" title
      avatar
      card
      :rows="3" :loading="loading">加载的数据</var-skeleton>
  <div class="viewport" v-else>
    <div class="fiexdHead">
      <!-- 推荐封面图 -->
      <div class="cover">
        <div class="title"><var-icon name="chevron-left" @touchend="handleBack" />{{ currUrlMap!.title }}</div>
        <var-image :src="bannerPicture"></var-image>
      </div>
      <!-- 推荐选项 -->
      <div class="tabs">
        <span class="text" :class="{ active: activeIndex === index }" v-for="(item, index) in subTypes" :key="item.id"
          @touchend="activeIndex = index">{{
            item.title }}</span>
      </div>
    </div>
    <!-- 推荐列表 -->
    <var-list :finished="finish" @load="load">
      <div class="scroll-view" v-for="(item, index) in subTypes" :key="item.id" v-show="activeIndex === index">
        <div class="goods">
          <div class="navigator" v-for="goods in item.goodsItems.items" :key="goods.id"
            :url="`/pages/goods/goods?id=${goods.id}`">
            <var-image class="thumb" :src="goods.picture"></var-image>
            <div class="name ellipsis">{{ goods.name }}</div>
            <div class="price">
              <span class="symbol">¥</span>
              <span class="number">{{ goods.price }}</span>
            </div>
          </div>
        </div>
        <p class="loading-text" v-if="!finish">正在加载...</p>
      </div>
    </var-list>
  </div>
</template>

<script setup lang="ts">
import { getHotRecommendAPI } from '@/api/hot';
import { SubTypeItem } from '@/type/hot';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
// 高亮下标
const activeIndex = ref(0)
// 推荐封面图
const bannerPicture = ref('')
// 推荐选项
const subTypes = ref<(SubTypeItem)[]>([])
// 结束标记
let finish = ref(false)
// 
let loading = ref(false)

onMounted(async () => {
  loading.value = true
  Promise.all([getHotRecommendData()])
  loading.value = false
})

// 返回
const handleBack = () => {
  router.back()
}

// 根据路由参数筛选出对应的数据
const currUrlMap = hotMap.find(item => item.type === route.params.type)

// 获取推荐列表数据
const getHotRecommendData = async () => {
  try {
    const { result } = await getHotRecommendAPI(currUrlMap!.url, {
      // 环境变量，开发环境，修改初始页面方便测试分页结束
      page: import.meta.env.DEV ? 30 : 1,
      pageSize: 10
    })
    bannerPicture.value = result.bannerPicture
    subTypes.value = result.subTypes
  } catch (err) {

  }
}

// 触底事件
const load = async () => {
  // 获取当前选项
  const currsubTypes = subTypes.value[activeIndex.value]
  // 分页条件
  if (currsubTypes.goodsItems.page < currsubTypes.goodsItems.pages) {
    // 当前页码累加
    currsubTypes.goodsItems.page++
  } else {
    // 标记已结束
    finish.value = true
    // 退出并轻提示
  }
  // 调用接口并传参
  const { result } = await getHotRecommendAPI(currUrlMap!.url, {
    subType: currsubTypes.id,
    page: currsubTypes.goodsItems.page,
    pageSize: currsubTypes.goodsItems.pageSize
  })
  // 新的列表选项
  const newSubTypes = result.subTypes[activeIndex.value]
  // 往原先的列表内 追加 新获取的列表数据
  currsubTypes.goodsItems.items.push(...newSubTypes.goodsItems.items)
}
</script>

<style scoped lang="scss">
.viewport {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 112px 0 0;
  position: relative;
  background-color: #f4f4f4;

  .fiexdHead {
    position: fixed;
    width: 100%;
    top: 0;
  }

  .cover {
    width: 100%;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;

    .title {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      text-align: center;
      background-color: #fff;

      .var-icon {
        height: 36px;
        position: absolute;
        left: 0;
        font-size: 26px;
      }
    }
  }

  .tabs {
    display: flex;
    justify-content: space-evenly;
    height: 50px;
    line-height: 50px;
    margin: 0 20px;
    top: 120px;
    font-size: 14px;
    border-radius: 10px;
    box-shadow: 0 4px 5px rgba(200, 200, 200, 0.3);
    color: #333;
    background-color: #fff;
    position: relative;
    z-index: 9;

    .text {
      margin: 0 20px;
      position: relative;
    }

    .active {
      &::after {
        content: '';
        width: 20px;
        height: 2px;
        transform: translate(-50%);
        background-color: #27ba9b;
        position: absolute;
        left: 50%;
        bottom: 8px;
      }
    }
  }

  .scroll-view {
    flex: 1;
    overflow-y: auto;
    margin-top: 50px;

    .goods {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 10px 10px;

      .navigator {
        width: 49%;
        height: 240px;
        padding: 10px;
        margin-top: 20px;
        border-radius: 10px;
        background-color: #fff;
      }

      .thumb {
        width: 100%;
        height: 150px;
      }

      .name {
        padding: 10px 0 0 0;
        height: 60px;
        font-size: 14px;
      }

      .price {
        line-height: 1;
        color: #cf4444;
        font-size: 16px;
      }

      .symbol {
        font-size: 70%;
      }

      .decimal {
        font-size: 70%;
      }
    }

    .loading-text {
      text-align: center;
      font-size: 14px;
      color: #666;
      padding: 0 0 10px;
    }
  }

}
</style>
