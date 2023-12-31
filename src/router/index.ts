import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper"

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "vue3vite",
    meta: {
      title: "vue3vite"
    },
    component: () => import("@/Layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页"
        },
        component: () => import("@/views/home/index.vue")
      },
      // 文章详情
      {
        meta: {
          title: "文章详情"
        },
        path: "/content",
        name: "content",
        component: () => import("@/views/content/index.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(
    // 在乾坤环境下时，将所有的路由地址前加上'/junminronghe'，否则将跳转至主应用的相应页面（eg：跳转至这里的文章详情页面，如果不加'/junminronghe'的话，将跳转至主应用的'/content'页面，如果主应用没有这个页面，将跳转至404页面）
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue" : "/"
  ),
  routes
})
export default router
