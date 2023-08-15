// src/api/api.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // 后端 API 的地址
    timeout: 10000,
});

export default {
    fetchItems() {
        return apiClient.get('/api/items');
    },
};
