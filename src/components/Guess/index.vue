<template>
  <div>
    <var-list :finished="finish" @load="load">
      <div class="caption">
        <text class="text">猜你喜欢</text>
      </div>
      <div class="guess">
        <div class="guess-item" v-for="item in guessList" :key="item.id" :url="`/pages/goods/goods?id=4007498`">
          <var-image class="image" mode="aspectFill" :src="item.picture"></var-image>
          <div class="name"> {{ item.name }} </div>
          <div class="price">
            <span class="small">¥</span>
            <span>{{ item.price }}</span>
          </div>
        </div>
      </div>
      <div class="loading-text" v-if="!finish"> 正在加载... </div>
    </var-list>
  </div>
</template>

<script setup lang="ts">
import { getHomeGoodsGuessLikeAPI } from '@/api/index';
import { GuessItem } from '@/type';
import { PageParams } from '@/type/global';
import { onMounted, ref } from 'vue';

// 分页参数
// Required 将 可选 转为 必选
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
// 已结束标记
const finish = ref(false)

onMounted(() => {
  getHomeGoodsGuessLikeData()
})

// 获取猜你喜欢数据
const guessList = ref<GuessItem[]>([])
const getHomeGoodsGuessLikeData = async () => {
  try {
    const { result } = await getHomeGoodsGuessLikeAPI()
    guessList.value.push(...result.items)
    // 分页条件: 小于总页数
    if (pageParams.page < result.pages) {
      // 页码累加
      pageParams.page++
    } else {
      finish.value = true
    }
  } catch (err) {
    
  }
}
// 重置数据
const resetData = () => {
  pageParams.page = 1
  guessList.value = []
  finish.value = false
  getHomeGoodsGuessLikeData()
}

// 触底事件
const load = () => {
  getHomeGoodsGuessLikeData()
}

// 暴露 猜你喜欢组件内的方法
defineExpose({
  resetData,
  getMore: getHomeGoodsGuessLikeData
})
</script>

<style scoped lang="scss">
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 14px 0 10px;
  font-size: 16px;
  color: #262626;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28px 0 30px;

    &::before,
    &::after {
      content: '';
      width: 20px;
      height: 20px;
      background-image: url(@/assets/images/bubble.png);
      background-size: contain;
      margin: 0 10px;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px;

  .guess-item {
    width: 50%;
    padding: 10px 10px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
  }

  .name {
    margin: 10px 0;
    font-size: 14px;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    line-height: 1;
    padding-top: 4px;
    color: #cf4444;
    font-size: 14px;
  }

  .small {
    font-size: 80%;
  }
}

// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 14px;
  color: #666;
  padding: 10px 0;
}
</style>
