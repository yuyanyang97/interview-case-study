<template>
    <div class="container mx-auto mt-8">
      <div class="flex justify-between items-start">
        <!-- Product Category -->
        <div>
          <ProductCategorySlider />
        </div>
  
        <!-- Slider -->
        <div class="w-3/4">
          <Slider />
        </div>
      </div>
  
      <!-- New Products Section -->
      <div class="mt-8">
        <NewProductSection />
      </div>
    </div>
</template>

<script>
import ProductCategorySlider from "@/components/ProductCategorySlider.vue";
import Slider from "@/components/Slider.vue";
import NewProductSection from "@/components/NewProductSection.vue";

export default {
  components: {
    ProductCategorySlider,
    Slider,
    NewProductSection,
  },
  methods: {
      formatCurrency(value) {
        // You can implement a more sophisticated currency formatting logic here
        return `$${value.toFixed(2)}`;
      },
    },
};
</script>