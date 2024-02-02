<template>
    <div class="container mx-auto mt-8">
      <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>

        <Suspense>
            <CartItem />
        </Suspense>
    </div>
  </template>

<script>
import CartItem from "@/components/CartItem.vue";

export default {
    name: 'Cart',
    components:{CartItem}
}
</script>