<template>
  <div class="bottomBar safe-area-bottom">
    <var-bottom-navigation v-model:active="active" @change="handleChange(active)">
      <var-bottom-navigation-item label="首页" icon="home" />
      <var-bottom-navigation-item label="分类" icon="minus-box-outline" />
      <var-bottom-navigation-item label="购物车" icon="shopping-outline" />
      <var-bottom-navigation-item label="我的" icon="account-circle" />
    </var-bottom-navigation>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useBottomBarStore } from '@/store';
import { storeToRefs } from 'pinia';

// 提取 pinia 仓库中的数据
const { activeBar } = storeToRefs(useBottomBarStore())
const { changeActiveBar } = useBottomBarStore()
// 路由
const router = useRouter()
// 当前底部导航栏选中的值
const active = ref(0)

onMounted(() => {
  active.value = activeBar.value
})

// 底部导航栏的切换
const handleChange = (active: number) => {
  changeActiveBar(active)
  switch (active) {
    case 0:
      router.push({ name: 'Index' })
      break;
    case 1:
      router.push({ name: 'Category' })
      break;
    case 2:
      router.push({ name: 'Cart' })
      break;
    case 3:
      router.push({ name: 'My' })
      break;
    default:
      break;
  }
}
</script>

<style scoped lang="scss">
.bottomBar {
  width: 100%;
}
</style>
