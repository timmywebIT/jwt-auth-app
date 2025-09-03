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
        async loginUser() {
            try {
                await axios.post('http://127.0.0.1:8000/api/login', this.user)
                this.resetUser()
            } catch (err) {
                console.log(err)
            }
        },
        resetUser() {
            this.user.name = ''
            this.user.email = ''
            this.user.password = ''
        },
    },
})
