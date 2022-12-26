import axios from 'axios'
import { showNotify } from 'vant'
import router from '@/router/index.js'

//登录请求网址: http://backend-api-01.newbee.ltd/api/v1/user/login
//baseURL: http://backend-api-01.newbee.ltd/api/v1/
// process.env.NODE_ENV
// yarn dev  开发  process.env.NODE_ENV  "development"
// yarn build  打包  process.env.NODE_ENV  "production"
let http = axios.create({
    //配置基础路径 
    baseURL: process.env.NODE_ENV === 'production' ? 'http://backend-api-01.newbee.ltd/api/v1/' : 'api/v1/',
    //超时
    timeout: 5000
})
//请求拦截器
http.interceptors.request.use(config => {
    // Do something before request is sent
    //在请求发出之前
    config.headers.token = localStorage.getItem('ml-token')
    return config;
}, error => {
    // Do something with request error
    //请求出现错误时
    return Promise.reject(error);
});

//响应拦截器
http.interceptors.response.use(response => {
    // Do something before response is sent
    //服务器响应数据回来之后，响应拦截器检测到，可以做一些事情
    let data = response.data
    //Notifty
    if (data.resultCode != 200) {
        if (data.resultCode === 416) {
            //表示没有登录。要返回登录页面
            if (router.currentRoute.path != '/login') {
                router.push('/login?needback=1')
            }
        }

        //数据不是我们需要的
        showNotify({
            type: "danger",
            message: data.message || '系统繁忙'
        })
    }
    //返回响应的data
    return data;
}, error => {
    // Do something with response error
    //响应错误时
    //vant组件Notify提示
    Notify({
        type: "danger",
        message: "系统繁忙，稍后再试"
    })
    return Promise.reject(error);
});

//导出http
export default http