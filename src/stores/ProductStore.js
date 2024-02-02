import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
    state: () =>({
        product_list: [],
        product: null,
        name: 'Test',
        loading: false
    }),
    getters:{
        favCount(){
            return this.product_list.reduce((p, c) => {
                return !c.status ? p+1 : p
            }, 0)
        },
        totalCount(){
            return this.product_list.reduce((p, c) => {
                return c.status ? p+1 : p
            }, 0)
        },
        newProduct(){
            return this.product_list.filter(product => product.new_product === 1)
        }
    },
    actions: {
        async getProducts() {
            try {
                this.loading = true;
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/getProduct`);
                
                this.product_list = res.data.data
                this.loading = false;
            } catch (error) {
                console.error('Error fetching tasks:', error);
                this.loading = false;
            }
        },
        async getProductDetail(product_id){
            const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/getProductDetail/${product_id}`);

            this.product = res.data.data
            
            if(res.msg){
                console.log(res.msg)
            }
        },
        async addProduct(product_list){
            const data = {
                name: product_list.name,
                price: product_list.price
            }
            const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/addProduct`, data);

            if(res.msg){
                console.log(res.msg)
            }
        },
        async deleteProduct(id){
            const data = {
                id: id
            }
            const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/removeProduct`, data);

            if(res.msg){
                console.log(res.msg)
            }
        },
        async updateStatus(id) {
            const data = {
                id: id
            }
            const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/updateProduct`, data);

            if(res.data.msg){
                this.getProducts();
                console.log(res.data.msg)
            }
        },
        async getProductInCategory(id){
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/getCategoryProduct/${id}`);
                this.product_list = res.data.data
            } catch (error) {
                console.error('Error fetching tasks:', error);
                this.loading = false;
            }
        }
    }
})