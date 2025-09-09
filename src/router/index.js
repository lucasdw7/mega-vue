// Ici on va créer une instance de router et config des routes

import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'home',
            component: () =>
                import('../views/tp/Home.vue')
        },
         {
            path: '/about',
            name:'about',
            component: () =>
                import('../views/tp/About.vue')
        }
    ]
});

export default router;