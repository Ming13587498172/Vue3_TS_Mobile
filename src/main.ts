import { createApp } from 'vue'
import App from './App.vue'
// import './style.css'
import 'amfe-flexible'

// 引入清除默认样式
import '@/style/reset.scss'
// 引入全局样式
import '@/style/index.scss'
// 引入路由
import router from '@/router/index'
// 引入varlet样式
import '@varlet/ui/es/snackbar/style/index'

import pinia from './store'
// import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


// 全局组件
import BottomBar from '@/components/BottomBar/index.vue'  // 底部导航栏
import Swiper from '@/components/Swiper/index.vue'  // 轮播图

const app = createApp(App)

app.use(pinia)
app.use(router)

// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)
app.component('BottomBar', BottomBar)
app.component('Swiper', Swiper)

app.mount('#app')
