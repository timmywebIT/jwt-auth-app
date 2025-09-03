import {defineStore} from 'pinia'
import axios from "axios";
import { showRegisterSuccess } from '@/utils/notifications.js'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {
            name:'',
            email:'',
            password:'',
        }
    }),

    getters: {},

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

                // Сохраняем токен и роль
                localStorage.setItem('token', data.token);
                localStorage.setItem('role', data.role);

                // Очищаем форму
                this.resetUser();

                // Перенаправляем по роли
                router.push(data.role === 'admin' ? '/admin' : '/user');
            } catch (err) {
                console.error('Ошибка входа:', err);
            }
        },
        resetUser() {
            this.user.name = ''
            this.user.email = ''
            this.user.password = ''
        },
    },
})
