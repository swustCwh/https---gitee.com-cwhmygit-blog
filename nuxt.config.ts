/*
 * @Author: cwh xxx@xxx.com
 * @Date: 2025-05-09 16:54:28
 * @LastEditors: WH-Chen cwh2024@163.com
 * @LastEditTime: 2025-05-09 21:40:41
 * @FilePath: \https---gitee.com-cwhmygit-blog\nuxt.config.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${WH-Chen}, All Rights Reserved.
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    // "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@unocss/nuxt",
    "@ant-design-vue/nuxt",
  ],
  antd: {
    // Options
    extractStyle: true, // 这个是关键参数
  },
});
