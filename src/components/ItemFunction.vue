<template>
  <div class="items-container">
    <h1 class="title">Items Function</h1>

    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="item">
        {{ item.name }}
        <el-button @click="deleteItem(item.id)" type="danger" class="delete-button">
          Delete
        </el-button>
      </li>
    </ul>

    <div class="add-item-container">
      <el-input v-model="newItemName" placeholder="Enter item name" class="item-input" />

      <el-button @click="addItem" type="primary" class="add-button">
        Add Item
      </el-button>
    </div>
  </div>
</template>

<script>
import { ElButton, ElInput } from 'element-plus';

export default {
  components: {
    ElButton,
    ElInput,
  },
  data() {
    return {
      // 初始项目数组和新项目名
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
      newItemName: '',
    };
  },
  methods: {
    // 添加项目方法
    addItem() {
      const newItem = { id: this.items.length + 1, name: this.newItemName };
      this.items.push(newItem);
      this.newItemName = ''; // 清空输入框
    },
    // 删除项目方法
    deleteItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
  },
};
</script>

<style scoped>
.items-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7ede2;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #e76f51;
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

.delete-button {
  background-color: #f94144;
}

.add-item-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.item-input {
  flex: 1;
  margin-right: 10px;
}

.add-button {
  background-color: #2a9d8f;
}
</style>
