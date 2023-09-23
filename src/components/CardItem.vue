<!-- components/CardItem.vue -->
<template>
  <div class="card">
    <div class="total-power">總兵力:{{ totalPower }}</div>
    <div class="status">
      <div class="position">{{ positionName[position] }}</div>
      <div class="buttons">
        <button @click="toggleCollection" :class="{ 'active': isCollected }">
          典
        </button>
        <button @click="toggleDynamic" :class="{ 'active': isDynamic }">
          動
        </button>
      </div>
    </div>

    <div class="card-info">
      <div :class="['card-name', colorClass]"><span class="word">{{ cardName }}</span></div>
      <div class="stars">
        <span v-for="index in 5" :key="index" @click="setRating(index)"
              :class="{ 'active': index <= rating }">
              <i class="far fa-star"></i>
        </span>
      </div>
      <div class="select-item">
        <select v-model="selectedOption1" class="custom-select">
          <option value="option1">奪魂攝魄</option>
          <option value="option2">杯蛇鬼車</option>
        </select>
        <button @click="selectedOption1=''" class="clear-button"><i class="fas fa-times"></i></button>
      </div>
      <div class="select-item">
        <select v-model="selectedOption2" class="custom-select">
          <option value="option1">奪魂攝魄</option>
          <option value="option2">杯蛇鬼車</option>
        </select>
        <button @click="selectedOption2=''" class="clear-button"><i class="fas fa-times"></i></button>
      </div>
      <div class="select-item">
        <select v-model="selectedOption3" class="custom-select">
          <option value="option1">滿勇非勇 戰勝文韜</option>
          <option value="option2">以治擊亂 鬼謀將威</option>
          <option value="option2">後發先至 妙算合變</option>
        </select>
        <button @click="selectedOption3=''" class="clear-button"><i class="fas fa-times"></i></button>
      </div>
      <div class="type-status">
        <button @click="openSelection()" class="main-button">
          <span>{{ selectedOption4 }}</span>
        </button>
        <button @click="selectedOption5='C'" class="cbas-button" :class="{ 'active': selectedOption5 === 'C' }">C
        </button>
        <button @click="selectedOption5='B'" class="cbas-button" :class="{ 'active': selectedOption5 === 'B' }">B
        </button>
        <button @click="selectedOption5='A'" class="cbas-button" :class="{ 'active': selectedOption5 === 'A' }">A
        </button>
        <button @click="selectedOption5='S'" class="cbas-button" :class="{ 'active': selectedOption5 === 'S' }">S
        </button>
      </div>
    </div>
  </div>
  <!-- 弹出窗口 -->
  <div id="selection-modal" class="modal">
    <div class="modal-content">
      <h2>Select an Option</h2>
      <button @click="selectOption('槍')">槍</button>
      <button @click="selectOption('弓')">弓</button>
      <button @click="selectOption('盾')">盾</button>
      <span class="close" @click="closeSelection()">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    cardName: String,
    cardImage: String,
    position: Number,
    country: String, // 添加color属性
  },
  computed: {
    // 计算属性来根据color属性设置颜色类
    colorClass() {
      if (this.country === '蜀國') {
        return 'shu'; // 设置为蜀国颜色
      } else if (this.country === '魏國') {
        return 'wei'; // 设置为魏国颜色
      } else if (this.country === '吳國') {
        return 'wu'; // 设置为吴国颜色
      } else {
        return ''; // 如果颜色不匹配，不添加颜色类
      }
    },
  },
  data() {
    return {
      isCollected: false,
      isDynamic: false,
      selectedOption1: '',
      selectedOption2: '',
      selectedOption3: '',
      selectedOption4: '槍',
      selectedOption5: '',
      totalPower: 0,
      positionName: {
        0: '主將',
        1: '副將',
        2: '副將',
      },
      rating: 0,
    };
  },
  methods: {
    toggleCollection() {
      this.isCollected = !this.isCollected;
    },
    toggleDynamic() {
      this.isDynamic = !this.isDynamic;
    },
    setRating(value) {
      this.rating = value;
    },
    // 打开弹出窗口
    openSelection() {
      const modal = document.getElementById("selection-modal");
      modal.style.display = "block";
    },
    // 选择选项并关闭弹出窗口
    selectOption(option) {
      this.selectedOption4 = option
      // 关闭弹出窗口
      this.closeSelection();
    },
    // 关闭弹出窗口
    closeSelection() {
      const modal = document.getElementById("selection-modal");
      modal.style.display = "none";
    }
  },
};
</script>

<style scoped>
* {
  font-weight: bold;
  text-transform: uppercase;
}

.card {
  border: 2px solid #333;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  display: inline-block;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff; /* 添加白色背景 */
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
}

.status {
  display: flex;
  justify-content: space-between;
}

.card-info {
  text-align: center;
  padding: 16px 0;
}

select {
  margin: 8px 0;
}

.stars {
  font-size: 25px;
  padding: 12px 0 0;
}

.stars span {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  margin: 2px;
}

.stars span.active {
  color: gold;
}

.card-name {
  margin: auto;
  width: 75px;
  height: 75px;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 18px;
}

/* 添加根据颜色类的样式 */
.shu {
  background-color: #008000; /* 绿色 */
  opacity: 0.75;
  color: #FFFFFF; /* 白色 */
}

.wei {
  background-color: #0000FF; /* 蓝色 */
  color: #FFFFFF; /* 白色 */
}

.wu {
  background-color: #FF0000; /* 红色 */
  color: #FFFFFF; /* 白色 */
}

.word {
  writing-mode: vertical-rl; /* 將文字垂直顯示 */
}

.buttons button {
  background-color: #333;
  color: #fff;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 4px;
  transition: background-color 0.3s, color 0.3s;
  font-size: 12px;
  padding: 0;
}


.buttons button.active {
  background-color: #ffc107;
  color: #333;
}

/* 自定义选择框样式 */
.custom-select {
  appearance: none; /* 去除默认样式 */
  background-color: #fff; /* 背景颜色 */
  border: 1px solid #ccc; /* 边框样式 */
  padding: 8px 12px; /* 内边距 */
  border-radius: 4px; /* 圆角 */
  font-size: 16px; /* 字体大小 */
  cursor: pointer; /* 光标样式 */
}

/* 悬停时的样式 */
.custom-select:hover {
  border-color: #666;
}

/* 选项样式 */
.custom-select option {
  background-color: #fff;
  color: #333;
  padding: 8px;
}

/* 选项悬停时的样式 */
.custom-select option:hover {
  background-color: #ffc107; /* 悬停时的背景颜色 */
  color: #333;
}

/* 清除按钮样式 */
.clear-button {
  background-color: #f0f0f0;
  color: #333;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
}

.clear-button:hover {
  background-color: #ccc;
}

/* 主按钮样式 */
.main-button {
  background-color: #000000;
  border: none;
  color: #fff;
  cursor: pointer;
  text-align: center;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  padding: 0;
}

/* CBAS按钮样式 */
.cbas-button {
  background-color: #ccc; /* 初始状态下的背景颜色（黯淡） */
  border: none;
  color: #000;
  padding: 0;
  margin: 5px;
  cursor: pointer;
  text-align: center;
  width: 35px;
  height: 35px;
  border-radius: 5px;
}

/* 激活状态下的CBAS按钮样式 */
.cbas-button.active {
  background-color: #ffcc00; /* 激活状态下的背景颜色（亮色） */
}

/* 添加一些间距 */
.select-item button:not(.main-button) {
  margin-top: 10px;
}

/* 添加一些整体样式 */
.select-item {
  display: flex;
  align-items: center;
  justify-content: center;
}


/* 弹出窗口样式 */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  text-align: center;
  position: relative;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
}

/* 按钮样式 */
button {
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>

