import Vue from 'vue'
import '../css/reset.css'
import './rem.js'

// mock模式引入mockjs
process.env.NODE_ENV === "mock" && import('./mock')


Vue.config.productionTip = false
// 引入vantjs
import { Toast } from 'vant';

// 提示Toast组件全局可用
window.Toast = Toast

// 引入get 和post请求
import {get, post} from './axios'
// 对数据请求方法进行原型挂在供全局使用
Vue.prototype.$get = get
Vue.prototype.$post = post

// 全局注册通用的基础组件-组件写在./components/common/V[A-Z]的命名方式
let context = require.context('components/common', false, /V[A-Z]\w+\.(vue|js)$/)
context.keys().forEach(item => {
    const comName = item.replace(/^\.\/(.*)\.(vue|js)$/, '$1')
    Vue.component(comName, context(item).default || context(item))
});
// 注册公用filter到全局
import * as filters from './filters';
Object.keys(filters).map(item => {
    Vue.filter(item, filters[item]);
});
// import mixin from './mixin';
// // 所有页面及组件公用方法可进行混入
// Vue.mixin(mixin)

export default ({root =' #app', ...config}) => {
    new Vue({
        ...config
    }).$mount(root)
}