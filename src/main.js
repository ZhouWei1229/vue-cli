import {createApp} from 'vue'
import App from './App.vue'
import '@/style/global.scss'
import router from './router/router';
import ElementPlus,{ ElButton } from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import * as ElIcons from '@element-plus/icons-vue';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.component(ElButton.name, ElButton);
app.use(ElementPlus);

// 全域註冊 Element Plus 圖示
for (const key in ElIcons) {
    app.component(key, ElIcons[key]);
}

app.mount('#app');
