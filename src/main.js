import {createApp} from 'vue'
import App from './App.vue'
import '@/style/global.scss'
import router from './router/router';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
