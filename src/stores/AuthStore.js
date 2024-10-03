import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user : null,
        errors : []
    }),
    actions:{
        async getUser(){
            this.user = JSON.parse(sessionStorage.getItem('userData'))
        },
        async register(data){
            try{
                const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/auth/register`, data);
                this.user = res.data.data

            } catch (error) {
                console.error('Error fetching data:', error.response.data.messages);
                return error.response.data.messages
            }
        },
        async login(data){
            try{
                const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/auth/login`, data)
                this.user = res.data.data

                sessionStorage.setItem('userData', JSON.stringify(this.user))
                return true
            } catch (error) {
                console.error('Error fetching data:', error.response.data.messages);
                return error.response.data.messages

            }
        },
        async logout(){
            sessionStorage.clear();
            this.user = null;
        }
    }
})