<template>        
    <div class="container mx-auto mt-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  
        <!-- Product Cards (Replace this with your actual product data) -->
        <div 
          v-for="product in productStore.product_list" 
          v-if="productStore.product_list.length > 0"
          :key="product.id" 
          class="border border-gray-300 p-4 rounded-md">
          <TaskDetail :product="product" />
        </div>
        <div v-else>
        <p>No Product</p>
      </div>
      </div>
    </div>
  </template>

<script>
import TaskDetail from "@/components/TaskDetail.vue";
import { useProductStore } from "@/stores/ProductStore";

export default {
  name: 'CategoryProductList',
  props: ['id'],
  components: { TaskDetail },
  setup(props){
    const productStore = useProductStore()

    productStore.getProductInCategory(props.id)

    return { productStore }
  }
}
</script>