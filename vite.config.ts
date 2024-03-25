import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
import postCssPxToRem from "postcss-pxtorem"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [VarletImportResolver()]
    }),
     autoImport({
      resolvers: [VarletImportResolver({ autoImport: true })]
    })
  ],
  // 配置路径别名
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // 配置代理
  server: {
    // port: 80,
    host: true,
    open: true,
    proxy: {
      '/dev-api': {
        target: 'http://127.0.0.1:8088',
        changeOrigin: true,
        // rewrite: (p) => p.replace(/^\/dev-api/, '')
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
})
