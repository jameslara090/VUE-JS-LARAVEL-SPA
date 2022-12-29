require('./bootstrap')

import Vue from 'vue';
window.Vue = Vue;

import routes from './routes'


import { createApp } from 'vue'
import Welcome from './components/Welcome'

const app = createApp({
    el: '#app',
    router: routes,
})

app.component('welcome', Welcome)

app.mount('#app')