<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded shadow-lg w-96">
        <h2 class="text-2xl font-semibold mb-6">Register</h2>
        <form @submit.prevent="register">
          <ul class="text-red-500 list-disc mb-3">
              <li v-for="error in errors" :key="error" >{{ error }}</li>
          </ul>
          <div class="mb-4">
            <label for="username" class="block text-gray-600">Username</label>
            <input v-model="username" type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-600">Email</label>
            <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-600">Password</label>
            <input v-model="password" type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
          </div>
          <div class="mb-6">
            <label for="confirmPassword" class="block text-gray-600">Confirm Password</label>
            <input v-model="confirmPassword" type="password" id="confirmPassword" name="confirmPassword" class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
          </div>
          <div class="flex items-center">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Register
            </button>
            <router-link to="/login" class="ml-4 text-gray-600 hover:underline">Already have an account?</router-link>
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
        const email = ref('');
        const password = ref('');
        const confirmPassword = ref('');
        const errors = ref([]);

      return {
        username,
        email,
        password,
        confirmPassword,
        errors
      };
    },
    methods:{
        async register(){
          const authStore = useAuthStore()
          const registrationData = {
              username: username.value,
              email: email.value,
              password: password.value,
              password_confirmation: confirmPassword.value,
          };
          const result = await authStore.register(registrationData)

          if(result.length > 0){
            this.errors = result;
          }else{
            //
          }
        }
    }
  };
  </script>
  