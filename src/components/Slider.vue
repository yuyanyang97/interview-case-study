<!-- Slider.vue -->

<template>
  <div class="relative overflow-hidden">
    <div class="flex transition-transform ease-in-out duration-300 transform" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="slide in images" class="w-full h-64 md:h-96 lg:h-128 flex-shrink-0">
        <img :src="slide" alt="Slide" class="w-full h-full object-cover" />
      </div>
    </div>
    <button @click="prevSlide" class="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl focus:outline-none">&#10094;</button>
    <button @click="nextSlide" class="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl focus:outline-none">&#10095;</button>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        images: [
            "https://placehold.co/200x200",
            "https://placehold.co/220x220"
        ],
        currentIndex: 0,
      };
    },
    methods: {
      nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  