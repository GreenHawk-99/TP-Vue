import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axiosApi from 'axios';

const axios = axiosApi.create({
    baseURL:`http://localhost:8080/`,
    
});

window.axios = axios;
createApp(App).mount('#app')