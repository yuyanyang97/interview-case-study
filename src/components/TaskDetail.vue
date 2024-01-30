<template>
    <div class="rounded-md text-center hover:border-gray-400">
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <div class="text-blue-500 font-semibold">{{ (Math.round(product.price * 100)/100).toFixed(2) }}</div>
        <div class="action">
            <button class="px-4 py-1 bg-blue-500 text-white rounded-md" @click = "cartStore.addToCart(product.id)">Add Cart</button>
        </div>
    </div>
</template>

<script>
    import { useCartStore } from "@/stores/CartStore";
    export default {
        props: ['product'],
        setup(){
            const cartStore = useCartStore()

            return{ cartStore }
        }
    }
</script>