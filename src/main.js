import './assets/main.css'

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n'
import en from "@/language/en.json";
import '@/assets/main.css'
import axios from 'axios';
import {
  getToken,
} from './Utils/Helper';

// Create the Pinia store
const pinia = createPinia();

// Create the Vue app
const app = createApp(App);
console.log(en)
const i18n = createI18n({
    legacy: true,
    locale: "",
    fallbackLocale: "en",
    messages: {
      "en": en,
    }
  });

  axios.interceptors.request.use(
    async (config) => {
      // assign authorization token
      const token = await getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      config.headers['Content-Type'] = 'application/json';
      config.headers['Access-Control-Allow-Origin'] = '*';
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      config.headers['X-localization'] = 'en';

      return config;
    },
    (err) => {
      console.log(err);
    },
  );

// Use Pinia in the app
app.use(pinia);

app.use(i18n);
// app.provide('globalData', globalData);
// Use Vue Router in the app
app.use(router);
// Mount the app to the DOM
app.mount('#app');

