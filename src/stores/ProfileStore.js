import { defineStore } from 'pinia';
import axios from 'axios';

export const useProfileStore = defineStore('profileStore', {
    actions: {
        async saveProfile(id, profile_data) {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/saveProfile/${id}`, profile_data);

            } catch (error) {
                
            }
        }
    }
})