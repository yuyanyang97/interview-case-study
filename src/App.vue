<template>
  <div id="app" class="bg-gray-800 text-white">
    <Suspense>
      <Header #default />
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
  <main class="container mx-auto mt-4">
      <!-- The router-view will render the component based on the current route -->
      <router-view></router-view>
  </main>
</template>

<script>
import Header from '@/views/Header.vue'
import { useAuthStore } from "@/stores/AuthStore";
export default {
  name: 'App',
  components: {
    Header,
  },
  setup(){
    const authStore = useAuthStore()

    authStore.getUser()
  }
}
</script>