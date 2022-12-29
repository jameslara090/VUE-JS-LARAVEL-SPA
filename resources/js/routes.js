import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '*',
            component: () => import(/* webpackChunkName: "not_found" */ './components/NotFound'),
            name: 'NotFound'
        },

    ]
})