import Vue from 'vue'
import VueRouter from 'vue-router'
import Fragment from 'vue-fragment'
import App from './App.vue'
import routes from './routes'
import store from './store'

Vue.use(Fragment.Plugin)

Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes,
    
})

new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)
})