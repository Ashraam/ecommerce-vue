import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Market from './components/Market.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/market',
            name: 'market',
            component: Market
        }
    ]
});

export default router;