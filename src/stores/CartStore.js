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
        async getCartList(){
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/cart/list`);
                this.cart = res.data.data

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async addToCart(product_id) {
            try {
                const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/cart/addToCart/${product_id}`);
                window.location.reload()
            } catch (error) {
                console.error('Error fetching data:', error);
                this.loading = false;
            }
        },
        async checkout() {
            try {
                const authStore = useAuthStore()
                const formData = new FormData()

                formData.append('user_id', authStore.user.id);
                const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/sales_order/checkout`, formData);

                return true
            } catch (error) {
                console.error('Error fetching data:', error);
                this.loading = false;
            }
        },
        async remove(product_id){
            try {
                const res = await axios.delete(`${import.meta.env.VITE_API_ENDPOINT}/cart/remove/${product_id}`);
                window.location.reload()
            } catch (error) {
                console.error('Error fetching data:', error);
                this.loading = false;
            }
        }
    }
})