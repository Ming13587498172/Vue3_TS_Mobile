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
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const active = ref(0)

const handleChange = (active: number) => {
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
