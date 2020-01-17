import axios from 'axios'
const defaultConfig = {
    timeout: 10000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    // headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    withCredentials: false
}
const instance = axios.create(defaultConfig)
// ajax请求拦截器
instance.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
let post = (url, data, params) => {
    return instance.post(url, data, ...params)
}
let get = (url, params) => {
    return instance.get(url, { params})
}
export {
    post,
    get
}