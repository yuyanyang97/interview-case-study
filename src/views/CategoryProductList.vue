<template>
    <div class="container mx-auto mt-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- Add Product Card -->
        <div class="border-2 border-dashed p-4 rounded-md text-center cursor-pointer hover:border-gray-400">
          <span class="text-4xl">+</span>
          <p class="mt-2 text-gray-600">Add Product</p>
        </div>
  
        <!-- Product Cards (Replace this with your actual product data) -->
        <div v-for="product in productStore.product_list" :key="product.id" class="border border-gray-300 p-4 rounded-md">
          <TaskDetail :product="product" />
        </div>
      </div>
    </div>
  </template>

<script>
import { ref } from "vue";
import TaskDetail from "@/components/TaskDetail.vue";
import TaskForm from "@/components/TaskForm.vue";
import { useProductStore } from "@/stores/ProductStore";

export default {
  name: 'Home',
  components: { TaskDetail, TaskForm },
  setup(){
    const productStore = useProductStore()
    const status = ref(true)

    productStore.getProductInCategory()

    return { productStore, status }
  }
}
</script>