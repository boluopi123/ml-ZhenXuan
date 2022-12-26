<template>
  <van-tabbar route active-color="#1baeae">
    <van-tabbar-item replace to="/home" icon="home-o">
      <span>首页</span>
      <template>
        <span class="icon iconfont icon-shouye"></span>
      </template>
    </van-tabbar-item>

    <van-tabbar-item replace to="/categary" icon="points">
      <span>分类</span>
      <template>
        <span class="icon iconfont icon-categary"></span>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="cart-o">
      <span>购物车</span>
      <template>
        <span class="icon iconfont icon-gouwuche"></span>
      </template>
    </van-tabbar-item>

    <van-tabbar-item replace to="/user" icon="user-o">
      <span>我的</span>
      <template>
        <span class="icon iconfont icon-31wode"></span>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
</script>

<style scoped>
.van-tabbar-item {
  font-size: 9px;
}
.van-tabbar-item .iconfont {
  position: relative;
  font-size: 0.55rem;
}
.van-tabbar-item .iconfont .cartNum {
  position: absolute;
  top: -3px;
  right: -6px;
  font-size: 12px;
  width: 14px;
  height: 14px;
  line-height: 14px;
  border-radius: 50%;
  background-color: #ee0a24;
  color: #fff;
}
</style>