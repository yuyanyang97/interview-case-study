<template>
    <div class="container mx-auto p-6">
        <h2 class="text-3xl font-semibold mb-6">User Activity Log</h2>

        <!-- Table container -->
        <div class="overflow-x-auto">
        <table class="min-w-full table-auto bg-white shadow-md rounded-lg">
            <thead>
            <tr class="bg-gray-200 text-left">
                <th class="px-6 py-3 text-gray-600 font-semibold uppercase tracking-wider">Date</th>
                <th class="px-6 py-3 text-gray-600 font-semibold uppercase tracking-wider">Activity Log</th>
            </tr>
            </thead>
            <tbody>
            <!-- Loop through activity logs -->
            <tr v-for="log in userStore.activity" :key="index" class="border-b">
                <td class="px-6 py-4 text-gray-800 whitespace-nowrap">{{ formatDate(log.created_at) }}</td>
                <td class="px-6 py-4 text-gray-800">{{ log.action }}</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import { useUserStore } from "@/stores/UserStore";
import dayjs from 'dayjs';

export default {
    setup () {
        const userStore = useUserStore();

        userStore.getActivity()

        return {userStore}
    },
    methods:{
        formatDate(date){
            const format_date = dayjs(date).format('YYYY-MM-DD HH:mm')

            return format_date
        }
    }
}
</script>