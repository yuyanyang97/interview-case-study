import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore } from '@/stores/AuthStore'

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cart : []
    }),
    getters:{
        cartCount(){
            return this.cart.length;
        },
        getTotal(){
            return this.cart.reduce((total, product) => total + (product.price * product.qty), 0);
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
            const authStore = useAuthStore()

            const req = {
                user_id : authStore.user.id
            }
            const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/addToCart/${product_id}`, req);
            window.location.reload()
            if(res.data.msg){
                console.log(res.data.msg)
            }
        },
        async checkout() {
            const authStore = useAuthStore()
            const formData = new FormData()

            formData.append('user_id', authStore.user.id);
            console.log(formData)
            const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/checkout`, formData);
            
            if(res.data.msg){
                console.log(res.data.msg)
            }
        }
    }
})