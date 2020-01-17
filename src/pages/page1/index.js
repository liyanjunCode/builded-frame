
import init from 'assets/js/base'
import App from './App.vue'
import router from './router'
import store from './store'
init({
    root: '#app',
    router,
    store,
    render: h => h(App)
})
