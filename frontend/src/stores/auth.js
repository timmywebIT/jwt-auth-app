import {defineStore} from 'pinia'
import axios from "axios";
import { showRegisterSuccess } from '@/utils/notifications.js'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {
            name:'',
            email:'',
            password:'',
        },
        token: localStorage.getItem('token') || null,
        role: localStorage.getItem('role') || null
    }),

    getters: {
        isAuthenticated: (state) => !!state.token
    },

    actions: {
        async createUser() {
            try {
                await axios.post('http://127.0.0.1:8000/api/register', this.user)
                this.resetUser()
                showRegisterSuccess()
            } catch (err) {
                console.log(err)
            }
        },
        async loginUser(router) {
            try {
                const { data } = await axios.post('http://127.0.0.1:8000/api/login', this.user);
                this.resetUser();
                this.saveTokens(data)
                this.routerPush(router, data);
            } catch (err) {
                console.error('Ошибка входа:', err);
            }
        },
        async logoutUser(router) {
            try {
                await axios.post('http://127.0.0.1:8000/api/logout', {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                router.push('/login');
            } catch (err) {
                console.log(err)
            }
        },
        resetUser() {
            this.user.name = ''
            this.user.email = ''
            this.user.password = ''
        },
        saveTokens(data) {
            this.token = data.token;
            this.role = data.role;
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
        },
        routerPush(router, data) {
            router.push(data.role === 'admin' ? '/admin' : '/user');
        }
    },
})
