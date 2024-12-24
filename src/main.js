import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap 样式
import './assets/global.css'; // 自定义全局样式

const app = createApp(App);
app.use(router); // 注册路由
app.mount('#app'); // 挂载应用
