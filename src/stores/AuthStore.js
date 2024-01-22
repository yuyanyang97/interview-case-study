import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user : []
    }),
    actions:{
        async register(data){
            //
        }
    }
})