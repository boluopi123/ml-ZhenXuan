<template>
  <!-- <h3 class="title">热销商品</h3> -->
  <div class="title">
    <slot name="title">默认标题</slot>
  </div>

  <div class="newGoodsList">
    <router-link
      :to="`/info/${item.goodsId}`"
      class="goodCard"
      v-for="item in dataItem"
      :key="item.goodsId"
    >
      <img :src="item.goodsCoverImg" alt="" />
      <p>{{ item.goodsName }}</p>
      <span>￥{{ item.sellingPrice }}</span>
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  dataItem: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped>
.title {
  height: 1.25rem;
  line-height: 1.25rem;
  background-color: #f9f9f9;
  text-align: center;
  color: #abb5ae;
}
.newGoodsList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.newGoodsList .goodCard:nth-child(2n + 1) {
  border-right: 1px solid #e9e9e9;
}

.goodCard {
  width: 50%;
  flex: 1;
  box-sizing: border-box;
  padding: 0.625rem;
  font-size: 0.375rem;
  text-align: center;
  border-bottom: 1px solid #e9e9e9;
}
.goodCard img {
  width: 4.375rem;
}
.goodCard span {
  color: #1baeae;
}
</style>