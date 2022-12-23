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