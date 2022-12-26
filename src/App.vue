
<template>
  <div id="app">
    <router-view></router-view>
    <TabBarVue v-if="isShowNav"></TabBarVue>
  </div>
</template>

<script setup>
import TabBarVue from "./components/TabBar.vue";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();
let isShowNav = ref(false);
watch(
  route,
  (newVal) => {
    isShowNav.value = newVal.meta.isShowNav;
  },
  {
    immediate: true,
  }
);
</script>

<style scoped>
</style>
