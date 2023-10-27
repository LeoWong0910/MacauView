import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/Home.vue';
import Myself from '../views/Myself.vue';
import References from '../views/References.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/myself',
        component: Myself,
    },
    {
        path: '/references',
        component: References,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;