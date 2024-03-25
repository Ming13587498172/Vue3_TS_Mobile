<template>
  <div class="headerBar safe-area-top">
    <var-app-bar title-position="center">
      <!-- logo文字 -->
      <div class="logo">
        <var-image class="logo-image" :src="Logo" />
        <div class="logo-text">新鲜 · 亲民 · 快捷</div>
      </div>
      <!-- 搜索条 -->
      <div class="search">
        <span class="icon-search"><var-icon name="magnify" />搜索商品</span>
        <span class="icon-scan"><var-icon name="barcode-scan" /></span>
      </div>
    </var-app-bar>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/assets/images/logo.png'
</script>

<style scoped lang="scss">
.headerBar {
  width: 100%;
  height: 90px;
  :deep(.var-app-bar) {
    width: 100%;
    height: 100%;
    .var-app-bar__title {
      width: 100%;
      background-image: url(@/assets/images/navigator_bg.png);
      background-size: cover;
      display: flex;
      flex-direction: column;
      padding-top: 8%;

      .logo {
        display: flex;
        align-items: center;
        padding: 8% 0 0 4%;

        .logo-image {
          width: 30%;
          height: 100%;
        }

        .logo-text {
          flex: 1;
          line-height: 20px;
          color: #fff;
          margin: 1% 0 0 3%;
          padding-left: 10px;
          border-left: 1px solid #fff;
          font-size: 16px;
        }
      }

      .search {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1% 1% 0 4%;
        height: 30px;
        margin: 3% 0;
        color: #fff;
        font-size: 16px;
        border-radius: 32px;
        background-color: rgba(255, 255, 255, 0.5);

        .icon-search {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          .var-icon {
            margin: 0 4% 0 0;
          }
        }

        .icon-scan {
          font-size: 20px;
          padding: 15px;
        }
      }
    }
  }
}
</style>
