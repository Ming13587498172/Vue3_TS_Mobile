<template>
  <div class="category">
    <ul>
      <li class="category-li" v-for="item in list" :key="item.id">
        <var-image fit="cover" :src="item.icon" />
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CategoryItem } from '@/type';

defineProps<{
  list: CategoryItem[]
}>()
</script>

<style scoped lang="scss">
.category {
  padding: 1% 1% 0 1%;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    .category-li {
      margin: 0 2% 2% 2%;
      width: 60px;
      display: flex;
      flex-direction: column;
      &:nth-of-type(5n) {
        margin: 0 0 2% 0;
      }
      p {
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
</style>
