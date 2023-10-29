import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/Home.vue';
import NewEvent from '../views/NewEvent.vue';
import AboutMe from '../views/AboutMe.vue';
import BarRestaurant from '../views/BarRestarurant.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/new-event',
        component: NewEvent,
    },
    {
        path: '/bar-restaurant',
        component: BarRestaurant,
    },
    {
        path: '/about-me',
        component: AboutMe,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;