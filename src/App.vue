<template>
  <div id="app" class="bg-gray-800 text-white">
    <header class="container mx-auto py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-lg font-semibold">My App</router-link>

        <nav class="flex space-x-4">
          <router-link to="/" class="hover:underline">Home</router-link>
          <router-link to="/register" class="hover:underline">Register</router-link>
          <router-link to="/login" class="hover:underline">Login</router-link>
          <router-link to="/order" class="hover:underline">Order</router-link>
          <!-- Add more navigation links as needed -->
          <router-link to="/cart" class="relative group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21h6a2 2 0 0 0 2-2H7a2 2 0 0 0 2 2zm-5-5h14m-5-9v6m-4-6v6"></path>
            </svg>

            <!-- Red dot indicating cart length -->
            <div v-if="cartCount.cartCount > 0" class="absolute -top-1 -right-1 bg-red-500 w-4 h-4 flex items-center justify-center rounded-full">
              <span class="text-xs font-bold">{{ cartLength }}</span>
            </div>
          </router-link>
        </nav>
      </div>
    </header>
  </div>

  <main class="container mx-auto mt-4">
      <!-- The router-view will render the component based on the current route -->
      <router-view></router-view>
    </main>
</template>

<script>
import { useCartStore } from "@/stores/CartStore";

export default {
  name: 'App',
  setup(){
    const cartStore = useCartStore()
    cartStore.getCartList(1)
    return cartStore
  }
};
</script>