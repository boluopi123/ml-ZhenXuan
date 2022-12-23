<template>
  <van-row class="nav" align="center">
    <van-col span="3"><van-icon name="wap-nav" color="#fff" /></van-col>
    <van-col span="18">
      <div class="h-content">
        <span>码路严选</span>
        <p>全新全意为学员服务</p>
      </div>
    </van-col>
    <van-col span="3" class="login" @click="$router.push('/login')"
      >登录</van-col
    >
  </van-row>
</template>

<style scoped>
.van-row {
  background-color: #1baeae;
  text-align: center;
  height: 1.5rem;
}
.h-content {
  background-color: #bbe7e7;
  height: 1.125rem;
  line-height: 1.125rem;
  border-radius: 1.125rem;
  display: flex;
  justify-content: space-around;
}
.h-content span {
  font-size: 0.75rem;
  font-weight: bold;
  color: #1baeae;
}
.h-content p {
  font-size: 0.125rem;
  color: #666666;
}
.h-content p::before {
  content: "";
  display: block;
  background-color: #666666;
  width: 2px;
  height: 0.9375rem;
  float: left;
  margin-left: -0.625rem;
  margin-top: 0.0625rem;
}
.login {
  color: #fff;
}
</style>