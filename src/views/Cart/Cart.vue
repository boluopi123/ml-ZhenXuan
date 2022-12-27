<template>
  <div class="cart-box">
    <!-- 头部 -->
    <van-nav-bar title="购物车" left-arrow @click-left="$router.back()">
      <template #right>
        <van-icon name="ellipsis" />
      </template>
    </van-nav-bar>
    <!-- 购物车列表 -->
    <div class="swipe-wraper">
      <van-swipe-cell v-for="item in store.cartList" :key="item.goodsId">
        <template #right>
          <van-button
            @click="deleteClick(item.cartItemId)"
            class="delete-button"
            square
            type="danger"
            text="删除"
          />
        </template>
        <template #default>
          <div class="goods">
            <!-- 昨天给每一个购物车数据添加了checked选项 -->
            <van-checkbox class="btn" v-model="item.checked"></van-checkbox>
            <van-card
              :num="item.goodsCount"
              :price="item.sellingPrice"
              :desc="item.goodsName"
              :title="item.goodsName"
              class="goods-card"
              :thumb="item.goodsCoverImg"
            >
              <template #num>
                <van-stepper @change="change(item)" v-model="item.goodsCount" />
              </template>
            </van-card>
          </div>
        </template>
      </van-swipe-cell>
    </div>
    <!-- 底部 -->
    <van-submit-bar
      :price="totalMoney"
      button-text="结算"
      v-show="store.cartList.length"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checkAll">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span>修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useCart } from "@/store/cartStore.js";
let store = useCart();

onMounted(() => {
  // 派发action,获取购物车数据,放到仓库中
  store.getCartListAsync();
});

// 点击步进器
let change = (item) => {
  store.putCartListAsync(item.cartItemId, item.goodsCount);
};
//点击删除
let deleteClick = (id) => {
  store.deleteCartListAsync(id);
};
let checkAll = computed({
  get() {
    return store.cartList.every((item) => item.checked);
  },
  set(val) {
    store.cartList.forEach((item) => (item.checked = val));
  },
});
let onSubmit = () => {};

//计算总价
let totalMoney = computed(() => {
  return store.cartList.reduce((prev, next) => {
    return (
      prev + (next.checked ? next.goodsCount * next.sellingPrice * 100 : 0)
    );
  }, 0);
});
</script>

<style scoped>
.cart-box {
  padding-bottom: 120px;
}
.cart-box .swipe-wraper .goods {
  display: flex;
  margin: 5px;
}
.cart-box .swipe-wraper .goods .van-checkbox {
  padding: 0 10px;
}

.cart-box .swipe-wraper .goods .van-card {
  width: 90%;
  margin-top: 0px;
}
.cart-box .swipe-wraper .delete-button {
  height: 100%;
}
.cart-box .van-submit-bar {
  margin-bottom: 50px;
}
</style>
