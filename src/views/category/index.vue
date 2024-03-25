<template>
  <div class="categoryBox">
    <!-- 搜索框 -->
    <div class="search">
      <var-input variant="outlined" size="small" placeholder="女靴">
        <template #prepend-icon>
          <var-icon name="magnify" />
        </template>
      </var-input>
    </div>
    <div class="categoryContent">
      <!-- 分类 -->
      <div class="categories">
        <!-- 左侧：一级分类 -->
        <div class="primary">
          <ul v-for="(item, index) in categoryList" :key="item.id" class="item"
            :class="{ active: activeIndex === index }">
            <li class="name" @click="activeIndex = index"> {{ item.name }} </li>
          </ul>
        </div>
        <!-- 右侧：二级分类 -->
        <div class="secondary">
          <!-- 焦点图 -->
          <Swiper class="banner" :list="bannerList"></Swiper>
          <!-- 内容区域 -->
          <div class="panel" v-for="item in subCategoryList" :key="item.id">
            <div class="title">
              <span class="name">宠物用品</span>
              <span class="more" hover-class="none">全部<var-icon name="chevron-right" /></span>
            </div>
            <div class="section">
              <div v-for="goods in item.goods" :key="goods.id" class="goods" hover-class="none"
                :url="`/pages/goods/goods?id=${ goods.id }`">
                <var-image class="image" :src="goods.picture"></var-image>
                <p class="name ellipsis">{{ goods.name }}</p>
                <div class="price">
                  <span class="symbol">¥</span>
                  <span class="number">{{ goods.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script setup lang="ts">
import { getCategoryTopAPI } from '@/api/category';
import { getHomeBannerAPI } from '@/api/index';
import BottomBar from '@/components/BottomBar/index.vue'
import { BannerItem } from '@/type';
import { CategoryTopItem } from '@/type/category';
import { computed, onMounted, ref } from 'vue';

// 是否加载完毕
// const isFinish = ref(false)
// 高亮的下标
const activeIndex = ref(0)

onMounted(() => {
  getHomeBannerData()
  getCategoryTopData()
})

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  try {
    const { result } = await getHomeBannerAPI()
    bannerList.value = result
  } catch (err) {

  }
}

// 获取分类列表数据
const categoryList = ref<CategoryTopItem[]>([])
const getCategoryTopData = async () => {
  try {
    const { result } = await getCategoryTopAPI()
    categoryList.value = result
  } catch (err) {

  }
}

// 提取当前二级分类数据
const subCategoryList = computed(() => {
  return categoryList.value[activeIndex.value]?.children
})
</script>

<style scoped lang="scss">
.categoryBox {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .search {
    padding: 10px;
    background-color: #fff;

    .input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      padding-left: 26px;
      color: #8b8b8b;
      font-size: 28px;
      border-radius: 32px;
      background-color: #f3f4f4;
    }

    .icon-search {
      &::before {
        margin-right: 10px;
      }
    }
  }


  .categoryContent {
    flex: 1;
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column;

    /* 分类 */
    .categories {
      flex: 1;
      min-height: 400px;
      display: flex;
    }

    /* 一级分类 */
    .primary {
      overflow: auto;
      width: 80px;
      flex: none;
      background-color: #f6f6f6;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        font-size: 14px;
        color: #595c63;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 50%;
          transform: translateX(-80px);
          border-top: 1px solid #e3e4e7;
        }
      }

      .active {
        background-color: #fff;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background-color: #27ba9b;
        }
      }
    }

    .primary .item:last-child::after,
    .primary .active::after {
      display: none;
    }

    /* 二级分类 */
    .secondary {
      padding: 0 10px 10px;
      width: calc(100% - 80px);
      height: 100%;
      overflow: auto;
      background-color: #fff;

      .banner {
        width: 100%;
        height: 120px;
        border-radius: 4px;
        overflow: hidden;
      }

      .panel {
        margin: 0 10px 0px;

        .title {
          height: 40px;
          line-height: 40px;
          color: #333;
          font-size: 14px;
          border-bottom: 1px solid #f7f7f8;

          .more {
            float: right;
            padding-left: 20px;
            font-size: 14px;
            color: #999;

            .var-icon {
              vertical-align: middle;
            }
          }
        }
      }

      .section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;

        .goods {
          width: calc((100% - 20px) / 3);
          margin: 0 10px 10px 0;

          &:nth-child(3n) {
            margin-right: 0;
          }

          image {
            width: 100%;
            height: 100%;
          }

          .name {
            padding: 5px;
            font-size: 12px;
            color: #333;
          }

          .price {
            padding: 5px;
            font-size: 12px;
            color: #cf4444;
          }

          .number {
            font-size: 12px;
            margin-left: 2px;
          }
        }
      }
    }
  }
}
</style>
