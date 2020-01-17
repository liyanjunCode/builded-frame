import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        storeMsg: '我是状态管理'
    },
    mutations: {
        changeStore(state, payload) {
            state.storeMsg = payload
        }
    },
    actions: {
        
    },
    getters: {

    }
})