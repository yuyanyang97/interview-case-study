import { defineStore } from 'pinia';
import axios from 'axios';

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
        }
    }
})