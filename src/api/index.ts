import axios from 'axios'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

// 创建 axios 实例
export const request = axios.create({
  // API 请求的默认前缀
  // "/junminrongheApi"要跟主应用，vite.config.ts中，代理的地址一致，给所有的接口请求地址前加“/junminrongheApi"字符串，表明是junminronghe子应用的接口
  baseURL: qiankunWindow.__POWERED_BY_QIANKUN__ ? '/junminrongheApi' : '',
  timeout: 60 * 1000, //设置超时
  headers: {
    "Content-Type": "application/json;charset=UTF-8;",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    ".AspNetCore.Culture": "c=zh-Hans|uic=zh-Hans",
  },
});
