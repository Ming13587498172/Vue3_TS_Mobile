<template>
  <div class="categoryBox">
    <!-- 搜索框 -->
    <div class="search">
      <div class="input">
        <span class="icon-search">女靴</span>
      </div>
    </div>
    <div class="categoryContent">
      <!-- 分类 -->
      <div class="categories">
        <!-- 左侧：一级分类 -->
        <div class="primary">
          <ul v-for="(item, index) in 10" :key="item" class="item" :class="{ active: index === 0 }">
            <li class="name"> 居家 </li>
          </ul>
        </div>
        <!-- 右侧：二级分类 -->
        <div class="secondary">
          <!-- 焦点图 -->
          <XtxSwiper class="banner" :list="[]" />
          <!-- 内容区域 -->
          <div class="panel" v-for="item in 3" :key="item">
            <div class="title">
              <span class="name">宠物用品</span>
              <navigator class="more" hover-class="none">全部</navigator>
            </div>
            <div class="section">
              <navigator v-for="goods in 4" :key="goods" class="goods" hover-class="none" :url="`/pages/goods/goods?id=`">
                <image class="image" src="https://yanxuan-item.nosdn.127.net/674ec7a88de58a026304983dd049ea69.jpg">
                </image>
                <div class="name ellipsis">木天蓼逗猫棍</div>
                <div class="price">
                  <text class="symbol">¥</text>
                  <text class="number">16.00</text>
                </div>
              </navigator>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script setup lang="ts">
import BottomBar from '@/components/BottomBar/index.vue'
</script>

<style scoped lang="scss">
.categoryBox {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .search {
    padding: 0 30px 20px;
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
      overflow: hidden;
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
      background-color: #fff;

      .carousel {
        height: 200px;
        margin: 0 30px 20px;
        border-radius: 4px;
        overflow: hidden;
      }

      .panel {
        margin: 0 30px 0px;
      }

      .title {
        height: 60px;
        line-height: 60px;
        color: #333;
        font-size: 28px;
        border-bottom: 1px solid #f7f7f8;

        .more {
          float: right;
          padding-left: 20px;
          font-size: 24px;
          color: #999;
        }
      }

      .more {
        &::after {
          font-family: 'erabbit' !important;
          content: '\e6c2';
        }
      }

      .section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 20px 0;

        .goods {
          width: 150px;
          margin: 0px 30px 20px 0;

          &:nth-child(3n) {
            margin-right: 0;
          }

          image {
            width: 150px;
            height: 150px;
          }

          .name {
            padding: 5px;
            font-size: 22px;
            color: #333;
          }

          .price {
            padding: 5px;
            font-size: 18px;
            color: #cf4444;
          }

          .number {
            font-size: 24px;
            margin-left: 2px;
          }
        }
      }
    }
  }
}
</style>
