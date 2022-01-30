// http/index.js
import axios from 'axios'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'



//创建axios的一个实例 
var instance = axios.create({
    baseURL: import.meta.env.VITE_APP_URL, //接口统一域名
    timeout: 6000, //设置超时
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;',
    }
})
let loading
//正在请求的数量
let requestCount = 0
//显示loading

//请求拦截器 
instance.interceptors.request.use((config) => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        const token = window.localStorage.getItem('token') || ''
        config.headers.Authorization = token
        //若请求方式为post，则将data参数转为JSON字符串
        if (config.method === 'POST') {
            config.data = JSON.stringify(config.data)
        }
        return config;
    }, (error) =>
    // 对请求错误做些什么
    Promise.reject(error));

//响应拦截器
instance.interceptors.response.use((response) => {
    if (response.data.state === 200) {
        return response.data.data
    }
    else if (response.data.state === 204) {
        message.error(response.data.msg)
    }
    else if (response.data.state === 421) {
        message.error('登录已过期，请重新登录')
    }
    return Promise.reject()

}, (error) => {
	console.log(error)
    // 响应错误
    return Promise.reject(error)
});


export default instance
