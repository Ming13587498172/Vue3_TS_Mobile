<template>
  <div>
    <var-pull-refresh class="index-box" v-model="isRefresh" @refresh="refresh">
      <!-- 头部导航栏 -->
      <HeaderBar></HeaderBar>
      <div class="content">
        <!-- 轮播图 -->
        <Swiper :list="bannerList"></Swiper>
        <!-- 分类面板 -->
        <CategoryPanel :list="categoryList"></CategoryPanel>
        <!-- 热门推荐 -->
        <HotPanel :list="hotPanelList"></HotPanel>
        <!-- 猜你喜欢 -->
        <Guess ref="guessRef"></Guess>
      </div>
      <!-- 底部导航栏 -->
      <BottomBar></BottomBar>
    </var-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/api/index'
import HeaderBar from '@/components/HeaderBar/index.vue'
import CategoryPanel from '@/views/index/components/CategoryPanel/index.vue'
import HotPanel from '@/views/index/components/HotPanel/index.vue'
import Guess from '@/components/Guess/index.vue'
import { BannerItem, CategoryItem, HotItem } from '@/type'
import { onMounted, ref } from 'vue'

// 加载中的标记
const isRefresh = ref(false)
// 获取猜你喜欢的组件实例对象
const guessRef = ref()

onMounted(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
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

// 获取分类面板数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  try {
    const { result } = await getHomeCategoryAPI()
    categoryList.value = result
  } catch (err) {
    
  }
}

// 获取热门推荐数据
const hotPanelList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  try {
    const { result } = await getHomeHotAPI()
    hotPanelList.value = result
  } catch (err) {
    
  }
}

// 下拉刷新事件
const refresh = async () => {
  // 开启下拉动画
  isRefresh.value = true
  // 重置猜你喜欢组件的数据
  guessRef.value?.resetData()
  // 刷新时获取初始数据
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(), guessRef.value?.resetData()])
  // 关闭下拉动画
  isRefresh.value = false
}
</script>

<style scoped lang="scss">
.index-box {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
