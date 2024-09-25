<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-6">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="username" class="block text-gray-600">username</label>
            <input v-model="username" type="username" id="username" name="username" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-600">Password</label>
            <input v-model="password" type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
          </div>
          <div class="flex items-center">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Login
            </button>
            <router-link to="/register" class="ml-4 text-gray-600 hover:underline">Don't have an account? Register</router-link>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from "@/stores/AuthStore";
   
    export default {
        setup() {
            const username = ref('');
            const password = ref('');

        return {
            username,
            password,
        };
        },
        methods:{
            async login(){
                const authStore = useAuthStore()
                const LoginData = {
                    username: username.value,
                    password: password.value,
                };
                
                await authStore.login(LoginData)
                console.log(authStore.user)
                authStore.user ? window.location.assign('/') : alert('wrong password')
            }
        }
    }
  </script>
  