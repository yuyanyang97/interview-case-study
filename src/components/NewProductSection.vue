<!-- NewProductSection.vue -->

<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">New Products</h2>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Display new products (replace this with actual product data) -->
        <!--click to enter product page-->
        <div v-for="product in productStore.newProduct" v-bind="product.id" :key="product.id" class="border p-4 rounded-md" @click="goToProductPage(product.id)">
            <h3 class="text-lg font-semibold">{{ product.name }}</h3>
            <p class="text-gray-600">{{ product.description }}</p>
            <div class="mt-2 text-blue-500 font-semibold">{{ `RM ${product.price.toFixed(2)}` }}</div>
        </div>
      </div>
    </div>
  </template>
  
<script>
  import { useProductStore } from "@/stores/ProductStore";
  export default {
    props: ['product'],
    setup(){
      const productStore = useProductStore()

      productStore.getProducts()

      return{ productStore }
    },
    methods: {
    goToProductPage(productId) {
        // Use router.push to navigate to the product page
        this.$router.push({ name: 'product', params: { id: productId } });
      }
    }
  };
</script>

  