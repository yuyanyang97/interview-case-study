<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" 
        placeholder="Add new Product..."
        v-model="newProduct"
        >
        <input type="number" 
        placeholder="Price..."
        v-model="newPrice"
        >
        <button>Add</button>
    </form>
</template>

<script>
import { useProductStore } from "../stores/ProductStore";
import { ref } from "vue";

    export default {
        setup(){
            const productStore = useProductStore()

            const newProduct = ref('')
            const newPrice = ref('')
            
            const handleSubmit = () => {
                if(newProduct.value.length > 0){
                    productStore.addProduct({
                        name: newProduct.value,
                        price: newPrice.value,
                        id: Math.floor(Math.random() * 1000)
                    })
                    newProduct.value = ''
                    newPrice.value = ''
                }
            }
            return { handleSubmit, newProduct, newPrice }
        }
    }
</script>