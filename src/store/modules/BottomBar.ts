import { defineStore } from 'pinia'
import { ref } from 'vue'

// 选项式
// export const useBottomBarStore = defineStore('bottomBar', {
//   state() {
//     return {
//       activeBar: 0
//     }
//   },
//   actions: {
//     changeActiveBar(val: number) {
//       this.activeBar = val
//     }
//   },
//   getters: {},
//   persist: true
// })

// 组合式
export const useBottomBarStore = defineStore('bottomBar', () => {
  // 当前选中的底部导航栏
  const activeBar = ref(0)

  // 切换底部导航栏
  const changeActiveBar = (val: number) => {
    activeBar.value = val
  }

  return { activeBar, changeActiveBar }
}, {
  persist: true,
})
