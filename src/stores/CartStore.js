import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore as authStore } from '@/stores/AuthStore'

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart : []
    }),
    getters:{
        cartCount(){
            return this.cart.length;
        }
    },
    actions:{
        async getCartList(user_id){
            try {
                this.loading = true;
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/getCart/${user_id}`);
                
                this.cart = res.data.data

                this.loading = false
            } catch (error) {
                console.error('Error fetching data:', error);
                this.loading = false;
            }
        },
        async addToCart(product_id) {
            console.log(authStore.user)
            const req = {
                user_id : authStore.user.id
            }
            const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/addToCart/${product_id}`, req);
            
            if(res.data.msg){
                console.log(res.data.msg)
            }
        },
    }
})