<template>
    <div>
      <div class="max-w-md mx-auto p-4 border rounded-md">
        <h2 class="text-2xl font-semibold">{{ product.name }}</h2>
        <p class="text-gray-700">{{ product.description }}</p>
        <div class="text-xl font-bold text-blue-600 mt-2">Price: RM {{ product.price }}</div>
        <button @click="addToCart" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Add to Cart
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useProductStore } from "@/stores/ProductStore";

  export default {
    props: ['id'],

    setup(props){
      const productStore = useProductStore()

      productStore.getProductDetail(props.id)

      return productStore
    },
    methods:{
      addToCart(){
        const productStore = useProductStore()
        
        productStore.getProductDetail(props.id)
      }
    }
  };
  </script>
  