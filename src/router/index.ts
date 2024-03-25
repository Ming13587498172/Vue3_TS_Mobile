import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/index/index.vue'),
        name: 'Index',
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/category',
    component: () => import('@/views/category/index.vue'),
    name: 'Category',
    meta: { title: '分类' }
  },
  {
    path: '/cart',
    component: () => import('@/views/cart/index.vue'),
    name: 'Cart',
    meta: { title: '购物车' }
  },
  {
    path: '/my',
    component: () => import('@/views/my/index.vue'),
    name: 'My',
    meta: { title: '我的' }
  },
  {
    path: '/hot/:type',
    component: () => import('@/views/hot/index.vue'),
    name: 'Hot',
    meta: { title: '热门推荐' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
