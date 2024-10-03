import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        activity : []
    }),
    actions: {
        // async saveProfile(id, profile_data) {
        //     try {
        //         const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/saveProfile/${id}`, profile_data);

        //     } catch (error) {
                
        //     }
        // }

        async getActivity() {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/user/getActivity`);
                this.activity = res.data.data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
})