import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: () => import('@/views/pages/login.vue'),
            name: 'login'
        },
        {
            path: '/register',
            component: () => import('@/views/pages/register.vue'),
            name: 'register'
        },
    ]
})

export default router
