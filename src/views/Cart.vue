<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>

      <div v-if="cartStore.cart.length > 0">
            <CartItem />
      </div>
      <div v-else>
        <p>Please add product </p>
        <a :href="'category'" class="text-blue-500">View Product</a>
      </div>
    </div>
  </template>

<script>
import CartItem from "@/components/CartItem.vue";
import { useCartStore } from "@/stores/CartStore";

export default {
    components:{CartItem},
    setup(){
        const cartStore = useCartStore()
        cartStore.getCartList()
        return { cartStore }
    },
}
</script>