import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue';
import Admin from '../components/Admin.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/admin', component: Admin },
  { path: '/home', component: Home }
];

const router = createRouter({
  history: createWebHistory(), // 确保使用 HTML5 History 模式
  routes
});

export default router;
