<template>
  <HomeHeader></HomeHeader>
  <!-- 轮播图 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in swiper" :key="index">
      <img :src="item.carouselUrl" alt="" style="width: 100%" />
    </van-swipe-item>
  </van-swipe>
  <!-- 宫格 -->
  <van-grid>
    <van-grid-item icon="shopping-cart-o" text="码路超市" />
    <van-grid-item icon="shopping-cart-o" text="码路超市" />
    <van-grid-item icon="shopping-cart-o" text="码路超市" />
    <van-grid-item icon="shopping-cart-o" text="码路超市" />
    <van-grid-item icon="shopping-cart-o" text="码路超市" />
    <van-grid-item icon="shopping-cart-o" text="码路超市" />
    <van-grid-item icon="shopping-cart-o" text="码路超市" />
    <van-grid-item icon="shopping-cart-o" text="码路超市" />
  </van-grid>
  <!-- 新品上架 -->
  <h3 class="title">新品上架</h3>
  <div class="newGoodsList">
    <div class="goodCard" v-for="item in newGoodsList" :key="item.goodsId">
      <img :src="item.goodsCoverImg" alt="" />
      <p>{{ item.goodsName }}</p>
      <span>￥{{ item.sellingPrice }}</span>
    </div>
  </div>
  <h3 class="title">热销商品</h3>
  <div class="newGoodsList">
    <div class="goodCard" v-for="item in hotGoodsList" :key="item.goodsId">
      <img :src="item.goodsCoverImg" alt="" />
      <p>{{ item.goodsName }}</p>
      <span>￥{{ item.sellingPrice }}</span>
    </div>
  </div>
  <h3 class="title">最新推荐</h3>
  <div class="newGoodsList">
    <div
      class="goodCard"
      v-for="item in recommendGoodsList"
      :key="item.goodsId"
    >
      <img :src="item.goodsCoverImg" alt="" />
      <p>{{ item.goodsName }}</p>
      <span>￥{{ item.sellingPrice }}</span>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { getHomeData } from "@/api/index.js";
import { ref } from "vue";
import HomeHeader from "@/components/HomeHeader.vue";

let swiper = ref([]);
let hotGoodsList = ref([]);
let newGoodsList = ref([]);
let recommendGoodsList = ref([]);

//完成初始渲染后获取首页数据
onMounted(() => {
  getHomeData().then((res) => {
    let data = res.data;
    console.log(res);
    let { carousels, hotGoodses, newGoodses, recommendGoodses } = res.data;

    swiper.value = carousels;
    newGoodsList.value = newGoodses;
    hotGoodsList.value = hotGoodses;
    recommendGoodsList.value = recommendGoodses;
  });
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