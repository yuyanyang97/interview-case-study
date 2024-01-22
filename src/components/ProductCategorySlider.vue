<!-- ProductCategorySlider.vue -->

<template>
    <div>
      <h2 class="text-lg font-semibold mb-4">Product Categories</h2>
      <div class="flex flex-col space-y-4">
        <!-- Iterate over product categories and display them vertically -->
        <div
          v-for="category in categories"
          :key="category.id"
          class="cursor-pointer p-2 bg-gray-200 rounded-md"
          @click="selectCategory(category)"
        >
          {{ category.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          { id: 1, name: 'Electronics' },
          { id: 2, name: 'Clothing' },
          { id: 3, name: 'Home & Garden' },
          // Add more categories as needed
        ],
      };
    },
    methods: {
      selectCategory(category) {
        // Implement logic to handle category selection
        console.log(`Selected category: ${category.name}`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  