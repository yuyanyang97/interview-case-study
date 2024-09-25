<template>
    <div class="container mx-auto p-4">
        <div class="bg-white shadow-md rounded-md p-6" v-if="orderStore.order_list.length > 0" v-for="order in orderStore.order_list">
            <OrderDetail :order="order" />
        </div>
        <div v-else>
            <p>Please create order</p>
            <a :href="'category'">View Product</a>
        </div>
    </div>
</template>

<script>
    import { useOrderStore } from "@/stores/OrderStore";
    import OrderDetail from "@/components/OrderDetail.vue"
    
    export default{
        components: {OrderDetail},
        setup(){
            const orderStore = useOrderStore()
            orderStore.getOrderList()
            return {orderStore}
        }
    }
</script>