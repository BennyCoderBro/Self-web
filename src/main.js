import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';

const app = createApp(App);
app.use(router); // 注册路由
app.mount('#app');