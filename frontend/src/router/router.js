import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: () => import('@/views/pages/auth/login.vue'),
            name: 'login'
        },
        {
            path: '/register',
            component: () => import('@/views/pages/auth/register.vue'),
            name: 'register'
        },
        {
            path: '/admin',
            component: () => import('@/views/pages/admin/index.vue'),
            meta: {requiresAuth: true, role: 'admin'},
        },
        {
            path: '/user',
            component: () => import('@/views/pages/user/index.vue'),
            meta: {requiresAuth: true, role: 'user'},
        },
    ]
})

router.beforeEach((to, _, next) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!to.meta.requiresAuth) return next();
    if (!token) return next('/login');
    if (to.meta.role && to.meta.role !== role) return next('/unauthorized');

    next();
});

export default router
