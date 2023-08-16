import { fileURLToPath, URL } from "node:url"
import vue from "@vitejs/plugin-vue"
import qiankun from "vite-plugin-qiankun"
import { defineConfig } from "vite"

export default defineConfig({
  base: '/vue3/',
  plugins: [
    vue(),
    // qiankun的第一个参数必须与主应用在main.ts中registerMicroApps的name值一致
    qiankun("vue3", {
      useDevMode: true
    })
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*" // 主应用获取子应用时跨域响应头
    },
    origin: "http://localhost:5174"
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
