import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user : null
    }),
    actions:{
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
                const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/auth/login`, data);
                this.user = res.data.data

                sessionStorage.setItem('userData', JSON.stringify(this.user));
                
            } catch (error) {
                console.error('Error fetching data:', error);
                this.loading = false;
            }
        }
    }
})