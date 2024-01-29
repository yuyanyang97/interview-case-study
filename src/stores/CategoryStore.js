import { defineStore } from 'pinia';
import axios from 'axios';

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        category_list : []
    }),
    actions:{
        async getCategoryList(){
            try {
                this.loading = true;
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/getCategory`);
                
                this.category_list = res.data.data

                this.loading = false
            } catch (error) {
                console.error('Error fetching data:', error);
                this.loading = false;
            }
        }
    }
})