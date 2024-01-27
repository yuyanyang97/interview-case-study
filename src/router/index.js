// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Order from '@/views/Order.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

const routes = [
  { path: '/', 
    name: 'home',
    component: Home
  },
  { path: '/order',
    name: 'order',
    component: Order 
  },
  { path: '/register', 
    name: 'register',
    component: Register 
  },
  { path: '/login', 
    name: 'login',
    component: Login 
  },
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