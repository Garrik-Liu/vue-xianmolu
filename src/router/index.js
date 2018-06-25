import Vue from 'vue'
import Router from 'vue-router'

import BeginMenu from '../components/BeginMenu.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'BeginMenu',
        component: BeginMenu
    }]
})