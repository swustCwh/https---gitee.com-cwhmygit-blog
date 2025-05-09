/*
 * @Author: cwh xxx@xxx.com
 * @Date: 2025-05-09 16:54:28
 * @LastEditors: cwh xxx@xxx.com
 * @LastEditTime: 2025-05-09 17:14:56
 * @FilePath: \my-blog1\nuxt.config.ts
 * @Description:
 *
 * Copyright (c) 2025 by ${WH-Chen}, All Rights Reserved.
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@unocss/nuxt",
  ],
});
