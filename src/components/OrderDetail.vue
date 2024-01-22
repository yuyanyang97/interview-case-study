<template>
    <div class="flex items-center mb-6">
        <div>
            <h1 class="text-2xl font-semibold">Order ID: {{ order.order_id }}</h1>
            <p class="text-gray-600">Status: {{ order.status }}</p>
        </div>
    </div>

    <div class="flex justify-between items-center border-t border-b py-4">
        <div>
            <span class="text-gray-500">Order Price:</span>
            <span class="font-semibold">{{ (Math.round(order.order_price * 100)/100).toFixed(2) }}</span>
        </div>
    </div>

    <div class="py-4">
        <button class="px-6 py-3 bg-blue-500 text-white rounded-md">Track Order</button>
    </div>
</template>

<script>
    import { useOrderStore } from "@/stores/OrderStore";
    export default {
        props: ['order'],
        setup(){
            const orderStore = useOrderStore()
            
            return{ orderStore }
        }
    }
</script>