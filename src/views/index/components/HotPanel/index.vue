<template>
  <div class="panel hot">
    <div class="item" v-for="item in list" :key="item.id">
      <div class="title">
        <p class="title-text">{{ item.title }}</p>
        <p class="title-desc">{{ item.alt }}</p>
      </div>
      <div class="cards" @click.prevent="goHot(item.type)">
        <var-image fit="cover" class="image" v-for="img in item.pictures" :key="img" :src="img"></var-image>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HotItem } from '@/type';
import { useRouter } from 'vue-router';

defineProps<{
  list: HotItem[]
}>()

const router = useRouter()

const goHot = (type: string) => {
  router.push({ name: 'Hot', params: { type } })
}

</script>

<style scoped lang="scss">
.hot {
  display: flex;
  flex-wrap: wrap;
  margin: 4px 4px 0;
  border-radius: 10px;
  background-color: #fff;

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 14px 0;
    font-size: 14px;
    color: #262626;
    position: relative;

    .title-desc {
      font-size: 12px;
      color: #7f7f7f;
      margin-left: 18px;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 130px;
    border-right: 1px solid #eee;
    border-top: 1px solid #eee;

    .title {
      justify-content: start;
    }

    &:nth-child(2n) {
      border-right: 0 none;
    }

    &:nth-child(-n + 2) {
      border-top: 0 none;
    }

    .cards {
      flex: 1;
      padding: 10px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      :deep(.var-image) {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
