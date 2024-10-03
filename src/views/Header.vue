<template>
    <header class="container mx-auto py-4">
        <div class="flex justify-between items-center">
            <router-link to="/" class="text-lg font-semibold">My App</router-link>
            <nav class="flex space-x-4">
                <router-link to="/register" v-if="!authStore.user" class="hover:underline">Register</router-link>
                <router-link to="/login" v-if="!authStore.user" class="hover:underline">Login</router-link>
                <router-link to="/order" v-if="authStore.user" class="hover:underline">Order</router-link>
                <router-link to="/activity" v-if="authStore.user" class="hover:underline">User Activity</router-link>

                <!-- Add more navigation links as needed -->
                <router-link v-if="authStore.user" to="/cart" class="relative group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21h6a2 2 0 0 0 2-2H7a2 2 0 0 0 2 2zm-5-5h14m-5-9v6m-4-6v6"></path>
                </svg>

                <!-- Red dot indicating cart length -->
                <div v-if="cartStore.cartCount > 0" class="absolute -top-1 -right-1 bg-red-500 w-4 h-4 flex items-center justify-center rounded-full">
                    <!-- <span class="text-xs font-bold">{{ cartLength }}</span> -->
                </div>
                </router-link>
                <router-link to="/" @click="logout" v-if="authStore.user" class="hover:underline">Logout</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
import { useCartStore } from "@/stores/CartStore";
import { useAuthStore } from "@/stores/AuthStore";

export default {
  name: 'App',
  async setup() {
    const cartStore = useCartStore()
    const authStore = useAuthStore()

    if(authStore.user)
      await cartStore.getCartList()

    // const user = JSON.parse(sessionStorage.getItem('userData'))

    return {cartStore, authStore}
  },
  methods: {
    async logout() {
      const authStore = useAuthStore();

      try {
        // Assuming authStore.logout() returns a promise
        await authStore.logout();
        window.location.reload();
      } catch (error) {
        console.error('Error during logout:', error);
      }
    },
  },
};
</script>