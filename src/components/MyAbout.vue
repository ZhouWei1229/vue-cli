<template>
  <div class="about-page">
    <div class="page-content">
      <h1 class="fade-in">About Us</h1>
      <p class="fade-in-up">We are a team of dedicated professionals committed to providing top-notch services and products.</p>
      <p class="fade-in-up">Our mission is to deliver excellence and exceed expectations in everything we do.</p>

      <div class="interaction">
        <el-button class="like-button" :class="{ liked: isLiked }" @click="toggleLike" size="medium" type="success">
          <el-icon><Sunny/></el-icon>
        </el-button>
        <el-button class="comment-button" :class="{ active: showComment }" @click="toggleComment" size="medium" type="info">
          <el-icon><ChatDotRound /></el-icon>
        </el-button>
      </div>

      <div v-if="showComment" class="comment-section">
        <h3>Comments</h3>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">
            {{ comment }}
            <el-button type="danger" :icon="Delete" circle @click="removeComment(index)"/>
          </li>
        </ul>
        <div class="comment-input">
          <input v-model="newComment" placeholder="Add a comment">
          <el-button @click="addComment" class="add-comment-button">Add Comment</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ElButton, ElIcon } from 'element-plus';
import { Delete } from "@element-plus/icons-vue";

export default {
  name: 'MyAbout',
  computed: {
    Delete() {
      return Delete
    }
  },
  components: {
    ElButton,
    ElIcon,
  },
  data() {
    return {
      isLiked: false,
      likeCount: 0,
      showComment: false,
      comments: [],
      newComment: '',
      commentCount: 0,
    };
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        this.likeCount++;
      } else {
        this.likeCount--;
      }
    },
    toggleComment() {
      this.showComment = !this.showComment;
    },
    addComment() {
      if (this.newComment.trim() !== '') {
        this.comments.push(this.newComment);
        this.newComment = '';
      }
    },
    removeComment(index) {
      this.comments.splice(index, 1);
    }
  }
};
</script>
<style scoped>
.about-page {
  background: linear-gradient(135deg, #fdd835, #ffb74d); /* 暖色系漸層背景 */
  color: #fff;
  min-height: 100vh; /* 設定最小高度以保證背景填充整個畫面 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-content {
  text-align: center;
}
.page-content h1 {
  font-size: 36px;
  margin-bottom: 1rem;
}

.page-content p {
  font-size: 18px;
  margin-bottom: 1.5rem;
}

/* 添加動畫效果 */
.fade-in {
  opacity: 0;
  animation: fadeInAnimation 1s ease forwards;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUpAnimation 1s ease forwards;
}

@keyframes fadeInAnimation {
  to {
    opacity: 1;
  }
}

@keyframes fadeInUpAnimation {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cute-message {
  text-align: center;
  margin-top: 2rem;
}

.pop-up {
  opacity: 0;
  transform: scale(0.8);
  animation: popUpAnimation 1s ease-in-out 1s forwards;
}

@keyframes popUpAnimation {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 新增動畫效果 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInAnimation 1s ease forwards;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUpAnimation 1s ease forwards;
}

@keyframes fadeInAnimation {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUpAnimation {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 新增互動元素樣式 */
.interaction {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.like-button,
.comment-button {
  border: none;
  background: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.like-button.liked {
  transform: scale(1.2);
  color: #e91e63;
}

.comment-button:hover {
  transform: scale(1.1);
}

.comment-section {
  margin-top: 2rem;
  text-align: left;
}

.comment-section h3 {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

.remove-comment-button {
  background: none;
  border: none;
  color: #e91e63;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  /* 樣式設定 */
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}

.remove-comment-button:hover {
  text-decoration: underline;
}

.add-comment-button {
  background: none;
  border: none;
  color: #e91e63;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  /* 樣式設定 */
  cursor: pointer;
  font-size: 1rem;
}

@keyframes fade-in-up-animation {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.comment-section {
  background: linear-gradient(135deg, #ffc643, #e79418);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in-up-animation 0.5s ease forwards;
}

.comment-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.comment-section ul {
  list-style-type: none;
  padding: 0;
}

.comment-section li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.remove-comment-button {
  background: none;
  border: none;
  color: #e91e63;
  cursor: pointer;
  font-size: 0.8rem;
}

.remove-comment-button:hover {
  text-decoration: underline;
}

.comment-input {
  display: flex;
  gap:8px;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in-up-animation 0.5s ease 0.3s forwards;
}

.comment-input input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.comment-input button {
  background: #e91e63;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 0 0;
}


</style>
