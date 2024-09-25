<template>
    <div class="flex items-center mb-6">
        <div>
            <h1 class="text-2xl font-semibold">Order ID: {{ order.order_id }}</h1>
            <p class="text-gray-600">Status: {{ $t("order_status."+order.status) }}</p>
        </div>
    </div>
    <p>Item:</p>
    <div class="flex justify-between items-center border-t border-b py-4">
        {{ console.log(orderStore.order_item_list) }}
        <div class="grid-cols-2" v-for="item in orderStore.order_item_list" :key="item.id">
            <div>
                <p>{{ item.product.name }}</p>
            </div>
            <div>
                <p>{{ item.product_price }}</p>
            </div>
        </div>
    </div>

    <div class="flex justify-between items-center border-t border-b py-4">
        <div>
            <span class="text-gray-500">Order Price:</span>
        </div>
        <div>
            <span class="font-semibold">{{ (Math.round(order.order_price * 100)/100).toFixed(2) }}</span>
        </div>
    </div>
    <div class="my-2">
        <button class="text-white 
            bg-blue-600 
            hover:bg-blue-700 
            font-medium 
            rounded-lg 
            text-sm 
            px-5 
            py-2.5 
            me-2 
            mb-2"
            @click="pay(order.id)"
            >Pay</button>
        <button class="text-white
            bg-red-500 
            hover:bg-red-600 
            font-medium 
            rounded-lg 
            text-sm 
            px-5 
            py-2.5 
            me-2 
            mb-2" 
            @click="cancel(order.id)">Cancel</button>
    </div>

</template>

<script>
    import { useOrderStore } from "@/stores/OrderStore";

    export default {
        props: ['order'],
        setup(props){
            const orderStore = useOrderStore()
            orderStore.getOrderDetailList(props.order.id)
            return{ orderStore }
        },
        methods:{
            pay(order_id){
                const orderStore = useOrderStore()
                orderStore.pay(order_id);
            },
            cancel(order_id){
                const orderStore = useOrderStore()
                orderStore.cancelOrder(order_id);
            }
        }
    }
</script>