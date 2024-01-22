<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-6">Register</h2>
        <form @submit.prevent="register">
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
  
  export default {
    setup() {
      const username = ref('');
      const email = ref('');
      const password = ref('');
      const confirmPassword = ref('');
  
      const register = () => {
        // Handle registration logic here
        console.log('Registration submitted:', username.value, email.value, password.value);
  
        // Simulating an error during registration
        const registrationError = true;
  
        if (registrationError) {
          // If there's an error, keep the entered username and email
          // You can display an error message to the user or handle it in your own way
          console.log('Registration error!');
  
          // Example: You can update the state to keep the entered username and email
          // This can be used to pre-fill the form with the previously entered values
          // if the user needs to fix the registration error
          // You may want to implement better error handling based on your application needs
          // For simplicity, we are just logging a message here
          // You can customize this based on your actual error handling strategy
        }
      };
  
      return {
        username,
        email,
        password,
        confirmPassword,
        register,
      };
    },
  };
  </script>
  