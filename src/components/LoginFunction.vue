<template>
  <div class="login-page">
    <transition name="fade" mode="out-in">
    <div v-if="!isLoggedIn" class="login-form">
      <h2 class="login-title">歡迎登入</h2>
      <el-form ref="loginForm" :model="loginData" class="form-container">
        <!-- 表單項目 -->
        <el-form-item label="使用者名稱" prop="username">
          <el-input
              v-model="loginData.username"
              placeholder="請輸入使用者名稱"
          />
        </el-form-item>
        <el-form-item label="密碼" prop="password">
          <el-input
              type="password"
              v-model="loginData.password"
              placeholder="請輸入密碼"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="login" class="login-button">
            <i class="el-icon-heart"></i> 登入
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else class="welcome-section">
      <div class="user-profile">
        <div class="avatar"></div>
        <p class="welcome-text">歡迎回來，{{ username }}！</p>
        <el-button type="danger" @click="showLogoutDialog">登出</el-button>
      </div>
    </div>
    </transition>
    <el-dialog v-if="showLogout" v-model="showLogout" title="登出確認" width="30%">
      <p>您確定要登出嗎？</p>
      <div class="dialog-footer">
        <el-button @click="showLogout = false">取消</el-button>
        <el-button type="danger" @click="logout">登出</el-button>
      </div>
    </el-dialog>
  </div>
  <!-- 步驟說明 -->
  <p>
    <span class="step">1. 登入表單區域：</span>
    <span class="step-desc">若您尚未登入，將呈現登入表單，要求您輸入使用者名稱和密碼。點擊「登入」按鈕後，將進行模擬的登入檢查。如果使用者名稱和密碼相符，您將被認定為已登入，並展示歡迎畫面。</span>
    <span class="step-desc">帳號:user</span>
    <span class="step-desc">密碼:password</span>
  </p>
  <p>
    <span class="step">2. 歡迎畫面區域：</span>
    <span class="step-desc">如果您已登入，將呈現歡迎畫面。在這裡，您將會看到一個使用者頭像（未實作），顯示使用者名稱，以及一個登出按鈕。點擊後將觸發登出確認對話框。</span>
  </p>
  <p>
    <span class="step">3. 登出確認對話框：</span>
    <span class="step-desc">當您點擊登出按鈕時，將彈出一個確認對話框，詢問您是否確定要登出。您可以選擇「取消」以取消登出動作，或點擊「登出」以執行登出。</span>
  </p>
</template>

<script>
import { ref } from 'vue';
import { ElButton, ElForm, ElFormItem, ElInput, ElDialog } from 'element-plus';

export default {
  components: {
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElDialog,
  },
  setup() {
    const loginData = ref({
      username: '',
      password: '',
    });

    const isLoggedIn = ref(false);
    const username = ref('');
    const showLogout = ref(false);

    const login = () => {
      // Simulate a login check here
      if (loginData.value.username.trim() === 'user' && loginData.value.password.trim() === 'password') {
        isLoggedIn.value = true;
        username.value = loginData.value.username;
      } else {
        // Show an error message
        console.log('Invalid credentials');
      }
    };

    const showLogoutDialog = () => {
      showLogout.value = true;
    };

    const logout = () => {
      showLogout.value = false;
      isLoggedIn.value = false;
      username.value = '';
      loginData.value.username = '';
      loginData.value.password = '';
    };

    return {
      loginData,
      isLoggedIn,
      username,
      showLogout,
      login,
      showLogoutDialog,
      logout,
    };
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
  background: linear-gradient(135deg, #f7d8b1 0%, #f3a683 100%); /* 漸層底效果 */
  border-radius: 16px;
}

.login-form {
  text-align: center;
}

.form-container {
  max-width: 300px;
  margin: 0 auto;
}

.el-form-item__content {
  border-color: #e76f51 !important; /* Unified border color */
}

.login-button {
  margin-top: 10px;
  background-color: #e76f51; /* Warm button color */
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #d46e26; /* Darker warm color on hover */
}

.login-title {
  font-size: 28px;
  color: #e76f51; /* Warm title color */
  margin-bottom: 20px;
}

.welcome-section {
  text-align: center;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  background-color: #e76f51;
  border-radius: 50%;
  margin-bottom: 15px;
}

.welcome-text {
  font-size: 20px;
  color: #e76f51; /* Warm text color */
  margin-bottom: 15px;
}

.el-button {
  margin-top: 10px;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.step {
  font-weight: bold;
  color: #e76f51; /* 暖色系的顏色 */
}

.step-desc {
  font-size: 16px;
  color: #333; /* 深色文字顏色 */
  margin-left: 10px;
  display: block;
  margin-top: 8px;
  line-height: 1.5;
}

.fade-enter-active, .fade-leave-active {
  transition: transform 0.8s, opacity 0.8s; /* 过渡动画持续时间 */
}
.fade-enter, .fade-leave-to {
  transform: translateY(20px); /* 初始位置和最终位置 */
  opacity: 0;
}

</style>