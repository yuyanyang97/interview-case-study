<template>
    <div v-for="item in cartStore.cart" class="flex items-center border-b py-4">
        <!-- <img :src="item.image" alt="Product Image" class="w-16 h-16 object-cover mr-4"> -->
        <div class="flex-grow">
        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
        <p class="text-gray-600">{{ item.description }}</p>
        </div>
        <div class="flex items-center">
        <span class="text-lg font-semibold mr-4">{{ item.price }}</span>
        <button class="text-red-500 hover:text-red-600">
            Remove
        </button>
        </div>
    </div>

    <div class="mt-8 flex justify-end">
        <span class="text-xl font-semibold">Total: {{ cartStore.getTotal }}</span>
    </div>
</template>

<script>
import { useCartStore } from "@/stores/CartStore";
import { useAuthStore } from "@/stores/AuthStore";

export default {
    async setup(){
        const cartStore = useCartStore()
        const authStore = useAuthStore()
        
        await cartStore.getCartList(authStore.user.id)
        // console.log(cartStore.cart)
        return { cartStore }
    },
    methods:{
        
    }
}   
</script>