<template>
  <el-menu :default-active="router.currentRoute.value.path" router class="navigation-menu-left" active-text-color="#ffd04b"
    background-color="#545c64" text-color="#fff">
    <SideMenuItem v-for="item in routes" :key="item.path" :menu="item"></SideMenuItem>
  </el-menu>
</template>
<script lang="ts" setup>
import router, { routes } from "@/router"
import SideMenuItem from "./SideMenuItem.vue"
</script>
<style lang="scss" scoped></style>
