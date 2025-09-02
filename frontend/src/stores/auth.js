import {defineStore} from 'pinia'
import axios from "axios";

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
                await axios.post('http://127.0.0.1:8000/api/users', this.user)
            } catch (err) {
                console.log(err)
            }
        }
    },
})
