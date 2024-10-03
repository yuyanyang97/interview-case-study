import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        order_list : [],
        order_item_list: []
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
                
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/sales_order/getOrder/${user}`);
                this.order_list = res.data.data

                this.loading = false
            } catch (error) {
                console.error('Error fetching tasks:', error);
                this.loading = false;
            }
        },
        async getOrderDetailList(order_id){
            try {
                this.loading = true;
                
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/sales_order/getOrderItem/${order_id}`);
                return res.data.data
            } catch (error) {
                console.error('Error fetching tasks:', error);
                this.loading = false;
            }
        },
        async pay(order_id) {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/sales_order/payOrder/${order_id}`);
                window.location.reload()
            } catch (error) {
                console.error('Error fetching tasks:', error.response.data.messages)
                alert(error.response.data.message)
            }
        },
        async cancelOrder(order_id){
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/sales_order/cancelOrder/${order_id}`);
                
                if(res.data.msg){
                    console.log(error.response.data.messages)
                }
                window.location.reload()
            } catch (error) {
                console.error('Error fetching tasks:', error);
                alert(error.response.data.message)
            }
        }
    }
})