import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
    },
    {
        path: '/common1',
        component: resolve => require(["../../components/page1/common1"], resolve)
    },
    {
        path: '/common2',
        component: resolve => require(["../../components/page1/common2"], resolve)
    }
]

const router = new VueRouter({
    routes
})

export default router