import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        order_list : []
    }),
    getters:{
        orderCount(type){
            return this.order_list.reduce((p, c) => {
                return c.status == type ? p+1 : p
            }, 0)
        }
    },
    actions:{
        async getOrderList(){
            try {
                this.loading = true;
                const user = JSON.parse(sessionStorage.getItem('userData')).id;
                
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/getOrder/${user}`);
                // console.log(res.data.data)
                this.order_list = res.data

                this.loading = false
            } catch (error) {
                console.error('Error fetching tasks:', error);
                this.loading = false;
            }
        }
    }
})