<template>
  <div class="swiper-box">
    <var-swipe class="swipe-example" :autoplay="2000">
      <var-swipe-item v-for="item in list" :key="item.id">
        <img class="swipe-example-image" :src="item.imgUrl">
      </var-swipe-item>
    </var-swipe>
  </div>
</template>

<script setup lang="ts">
import { BannerItem } from '@/type';


defineProps<{
  list: BannerItem[]
}>()
</script>

<style scoped lang="scss">
.swiper-box {
  width: 100%;
  :deep(.swipe-example) {
    height: 100%;
    .swipe-example-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
