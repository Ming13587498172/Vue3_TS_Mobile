<template>
  <div class="myBox">
    <div class="viewport">
      <!-- 个人资料 -->
      <div class="profile">
        <!-- 情况1：已登录 -->
        <div class="overview" v-if="false">
          <div url="/pagesMember/profile/profile">
            <var-image class="avatar"
              src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/avatar_3.jpg"></var-image>
          </div>
          <div class="meta">
            <div class="nickname"> 黑马程序员 </div>
            <div class="extra" url="/pagesMember/profile/profile">
              <span class="update">更新头像昵称</span>
            </div>
          </div>
        </div>
        <!-- 情况2：未登录 -->
        <div class="overview" v-else>
          <div url="/pages/login/login">
            <var-image class="avatar gray"
              src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png">
            </var-image>
          </div>
          <div class="meta">
            <div url="/pages/login/login" class="nickname">
              未登录
            </div>
            <div class="extra">
              <text class="tips">点击登录账号</text>
            </div>
          </div>
        </div>
        <div class="settings" url="/pagesMember/settings/settings">
          设置
        </div>
      </div>
      <!-- 我的订单 -->
      <div class="orders">
        <div class="title">
          我的订单
          <div class="navigator" url="/pagesOrder/list/list?type=0">
            查看全部订单<var-icon name="chevron-right" />
          </div>
        </div>
        <div class="section">
          <!-- 订单 -->
          <div v-for="item in orderTypes" :key="item.type" :class="item.icon"
            :url="`/pagesOrder/list/list?type=${item.type}`" class="navigator">
            {{ item.text }}
          </div>
          <!-- 客服 -->
          <!-- <button class="contact icon-handset" open-type="contact">售后</button> -->
        </div>
      </div>
      <!-- 猜你喜欢 -->
      <view class="guess">
        <Guess ref="guessRef"></Guess>
      </view>
    </div>

    <BottomBar></BottomBar>
  </div>
</template>

<script setup lang="ts">
import Guess from '@/components/Guess/index.vue'
import BottomBar from '@/components/BottomBar/index.vue'

// 订单选项
const orderTypes = [
  { type: 1, text: '待付款', icon: 'icon-currency' },
  { type: 2, text: '待发货', icon: 'icon-gift' },
  { type: 3, text: '待收货', icon: 'icon-check' },
  { type: 4, text: '待评价', icon: 'icon-comment' },
]
</script>

<style scoped lang="scss">
.myBox {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .viewport {
    height: 100%;
    background-repeat: no-repeat;
    background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/center_bg.png);
    background-size: 100% auto;
    overflow-y: auto;
  }

  /* 用户信息 */
  .profile {
    margin-top: 10px;
    position: relative;

    .overview {
      display: flex;
      height: 60px;
      padding: 0 10px;
      color: #fff;

      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50% !important;
        background-color: #eee;
      }
    }


    .gray {
      filter: grayscale(100%);
    }

    .meta {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      line-height: 12px;
      padding: 16px 0;
      margin-left: 10px;
    }

    .nickname {
      max-width: 350px;
      margin-bottom: 16px;
      font-size: 18px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .extra {
      display: flex;
      font-size: 18px;
    }

    .tips {
      font-size: 14px;
    }

    .update {
      padding: 3px 10px 1px;
      color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.8);
      margin-right: 10px;
      border-radius: 30px;
    }

    .settings {
      position: absolute;
      bottom: 0;
      right: 20px;
      font-size: 16px;
      color: #fff;
    }
  }

  /* 我的订单 */
  .orders {
    position: relative;
    z-index: 99;
    padding: 30px;
    margin: 30px 10px 0;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(240, 240, 240, 0.6);

    .title {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #1e1e1e;

      .navigator {
        font-size: 14px;
        color: #939393;
        float: right;
      }
    }

    .section {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 20px 20px 10px;

      .navigator,
      .contact {
        text-align: center;
        font-size: 14px;
        color: #333;

        &::before {
          display: block;
          font-size: 60px;
          color: #ff9545;
        }
      }

      .contact {
        padding: 0;
        margin: 0;
        border: 0;
        background-color: transparent;
        line-height: inherit;
      }
    }
  }

  /* 猜你喜欢 */
  .guess {
    background-color: #f7f7f8;
    margin-top: 10px;
  }
}
</style>
