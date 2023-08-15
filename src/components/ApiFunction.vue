<template>
  <div class="app-container">
    <div class="items-container">
      <h1 class="title">Cute Item List</h1>

      <button class="fetch-button" @click="getItems">Fetch Items</button>

      <ul v-if="items.length > 0" class="item-list">
        <li v-for="item in items" :key="item.id" class="item">
          <span class="item-name">{{ item.name }}</span>
          <button @click="deleteItem(item.id)" class="delete-button">
            Delete
          </button>
        </li>
      </ul>

      <p v-else class="empty-message">No items available</p>

      <div class="add-item-container">
        <input v-model="newItemName" placeholder="Enter item name" class="item-input" />

        <button @click="addItem" class="add-button">
          Add Item
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from '@/api/api'
export default {
  data() {
    return {
      items: [],
      newItemName: '',
    };
  },
  methods: {
    async getItems() {
      try {
        const response = await apiClient.fetchItems(); // 假设您已经定义了 apiClient
        this.items = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    addItem() {
      const newItem = { id: this.items.length + 1, name: this.newItemName };
      this.items.push(newItem);
      this.newItemName = ''; // 清空输入框
    },
    deleteItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  border-radius: 16px;
}

.items-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #e76f51;
  text-align: center;
}

.fetch-button {
  background-color: #f7a399;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto 20px;
}

.fetch-button:hover {
  background-color: #f36f6f;
}

.item-list {
  list-style: none;
  padding: 0;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-name {
  color: #e76f51;
  font-weight: bold;
}

.delete-button {
  background-color: #f94144;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #d43d3d;
}

.empty-message {
  font-style: italic;
  color: #e76f51;
  text-align: center;
  margin-top: 20px;
}

.add-item-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.item-input {
  flex: 1;
  margin-right: 10px;
  padding: 8px 10px;
  border: 1px solid #e76f51;
  border-radius: 4px;
  color: #e76f51;
  background-color: transparent;
}

.add-button {
  background-color: #e76f51;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #d7635b;
}
</style>
