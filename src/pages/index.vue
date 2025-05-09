<!--
 * @Author: cwh xxx@xxx.com
 * @Date: 2025-05-09 16:27:41
 * @LastEditors: WH-Chen cwh2024@163.com
 * @LastEditTime: 2025-05-09 21:20:07
 * @FilePath: \https---gitee.com-cwhmygit-blog\src\pages\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${WH-Chen}, All Rights Reserved. 
-->
<template>
  <div>
    <a-extract-style>
      <h1>Hello World</h1>
      <a-space wrap>
        <a-button type="primary">Primary Button</a-button>
        <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
      </a-space>
    </a-extract-style>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
</script>

<style lang="less" scoped></style>
