import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user : null,
        in_session: false
    }),
    actions:{
        async getUser(){
            const key = JSON.parse(sessionStorage.getItem('userData'))

            key ? 
                key.session_id ? 
                (this.user = key, this.in_session = true) : this.in_session = false 
                : this.in_session = false
        },
        async register(data){
            try{
                const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/auth/register`, data);
                this.user = res.data.data

            } catch (error) {
                console.error('Error fetching data:', error);
                this.loading = false;
            }
        },
        async login(data){
            try{
                const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/auth/login`, data)
                this.user = res.data.data

                sessionStorage.setItem('userData', JSON.stringify(this.user))
            } catch (error) {
                console.error('Error fetching data:', error);
                this.loading = false;
            }
        },
        async logout(){
            sessionStorage.clear();
            this.user = null;
        }
    }
})