<template>
  <div class="sub-layout">
    <SideBar class="menu"></SideBar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
import SideBar from "./components/SideBar.vue"
</script>
<style lang="scss" scoped>
.sub-layout {
  height: 100%;
  display: flex;
  width: 100%;

  .menu {
    width: 200px;
  }

  .container {
    width: 100%;
    height: 100%;
  }
}
</style>
