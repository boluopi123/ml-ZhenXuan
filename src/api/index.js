import http from './http'
import md5 from "js-md5"
//封装api接口
//注册接口
export function register(name, pwd) {
    return http.post('/user/register', {
        loginName: name,
        password: pwd
    })
}

//登录接口
export function login(name, pwd) {
    return http.post('/user/login', {
        loginName: name,
        passwordMd5: md5(pwd)//对密码进行加密
    })
}

//获取首页数据
export function getHomeData() {
    return http.get('/index-infos')
}

//根据商品的id，获取商品的详细
export function getInfoData(id) {
    return http.get('/goods/detail/' + id)
}
//添加商品到购物车
export function addCart(options) {
    return http.post("/shop-cart", options)
}
//获取购物车商品列表
export function getCartList() {
    return http.get("/shop-cart")
}
//删除购物车中的商品
export function deleteCartList(id) {
    return http.delete("/shop-cart/" + id)
}
//购物车步进器
export function putCartList(id, count) {
    return http.put('/shop-cart/', {
        cartItemId: id,
        goodsCount: count
    })
}
// ======================= 获取地址列表
export function getAddressList() {
    return http.get("/address")
}

// ======================= 根据ID获取某个地址，实现数据回显
export function getAddressDetail(id) {
    return http.get("/address/" + id)
}

// ======================= 编辑地址
export function updateAddress(obj) {
    return http.put("/address", obj)
}

// ======================= 新增地址
export function addAddress(obj) {
    return http.post("/address", obj)
}

// ======================= 删除地址
export function removeAddress(id) {
    return http.delete("/address/" + id)
}