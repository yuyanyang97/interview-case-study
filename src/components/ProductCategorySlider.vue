<!-- ProductCategorySlider.vue -->

<template>
    <div>
      <h2 class="text-lg font-semibold mb-4">Product Categories</h2>
      <div class="flex flex-col space-y-4">
        <!-- Iterate over product categories and display them vertically -->
        <div
          v-for="category in category_list"
          :key="category.id"
          class="cursor-pointer p-2 bg-gray-200 rounded-md text-center"
          @click="selectCategory(category.id)"
        >
          {{ category.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useCategoryStore } from "@/stores/CategoryStore";

  export default {
    setup() {
      const categoryStore = useCategoryStore()

      categoryStore.getCategoryList()
      
      return categoryStore
    },
    methods: {
      selectCategory(categoryId) {
        // Implement logic to handle category selection
        this.$router.push({ name: 'category', params: { id: categoryId } });
      },
    },
  };
  </script>
  