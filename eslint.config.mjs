/*
 * @Author: cwh xxx@xxx.com
 * @Date: 2025-05-09 17:01:45
 * @LastEditors: cwh xxx@xxx.com
 * @LastEditTime: 2025-05-09 17:15:36
 * @FilePath: \my-blog1\eslint.config.mjs
 * @Description: 
 * 
 * Copyright (c) 2025 by ${WH-Chen}, All Rights Reserved. 
 */
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "vue/valid-template-root": "warn",
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
)
