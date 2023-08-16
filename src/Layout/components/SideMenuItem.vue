<template>
  <el-sub-menu v-if="props.menu?.children?.length" :index="props.menu.path">
    <template #title>{{ props.menu.meta?.title }}</template>
    <SideMenuItem v-for="item in props.menu.children" :key="item.path" :menu="item"></SideMenuItem>
  </el-sub-menu>
  <el-menu-item v-else :index="props.menu.path">{{ props.menu.meta?.title }}</el-menu-item>
</template>
<script lang="ts" setup>
import { RouteRecordRaw } from "vue-router"

const props = defineProps<{ menu: RouteRecordRaw }>()
</script>
<style lang="scss" scoped></style>
