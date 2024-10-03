<template>
    <div class="flex items-center mb-6">
        <div>
            <h1 class="text-2xl font-semibold">Order ID: {{ order.order_id }}</h1>
            <p class="text-gray-600">Status: {{ $t("order_status."+order.status) }}</p>
        </div>
    </div>
    <p>Item:</p>
    <div class="flex justify-between items-center border-t border-b py-4">
    <div class="grid grid-cols-1 gap-4 w-full">
        <div v-for="item in order_list" :key="item.id" class="flex justify-between">
            <!-- Product name aligned to the start -->
            <div>
                <p>{{ item.product.name }} x {{ item.qty }}</p>
            </div>
            <!-- Product price aligned to the end -->
            <div>
                <p>{{ item.product_price }}</p>
            </div>
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

    <div class="my-2" v-if="order.status === 1">
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
    import { ref,onMounted } from "vue";

    export default {
        props: ['order'],
        setup(props) {
        const orderStore = useOrderStore();
        const order_list = ref([]);  // Use ref to make order_list reactive

        const fetchOrderDetails = async () => {
        const details = await orderStore.getOrderDetailList(props.order.id);
        order_list.value = details;  // Assign the fetched data to the reactive order_list
        };

        onMounted(() => {
        fetchOrderDetails();
        });

        return { order_list };  // Return order_list so the template can access it
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