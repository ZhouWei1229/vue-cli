<template>
  <div class="container">
    <h1 class="title">Item List</h1>
    <button class="fetch-button" @click="getItems">Fetch Items</button>
    <ul v-if="items.length > 0" class="item-list">
      <li v-for="item in items" :key="item.id" class="item">{{ item.name }}</li>
    </ul>
    <p v-else class="empty-message">No items available - 此界面通過 Express 自定義服務器進行 API GET 请求的串接</p>
  </div>
</template>

<script>
import apiClient from '@/api/api';

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getItems() {
      try {
        const response = await apiClient.fetchItems();
        this.items = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 24px;
  color: #e25822; /* 暖红色 */
  margin-bottom: 10px;
}

.fetch-button {
  background-color: #f89406; /* 橘黄色 */
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.fetch-button:hover {
  background-color: #d87c04; /* 橘黄色 - 深 */
}

.item-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.item {
  background-color: #f2b138; /* 橙黄色 */
  color: white;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
}

.empty-message {
  font-style: italic;
  color: #e25822; /* 暖红色 */
}
</style>
