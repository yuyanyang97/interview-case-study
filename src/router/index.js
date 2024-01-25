// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Order from '@/views/Order.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/order', component: Order },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  {
    path: '/products/:id',
    name: 'product',
    component: ProductDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,   
});

export default router;