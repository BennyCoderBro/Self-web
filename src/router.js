import { createRouter, createWebHashHistory } from 'vue-router';

// 确认导入路径和大小写一致
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Admin from './components/Admin.vue';
import Register from './components/Register.vue';
import Author from './components/Author.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/admin', component: Admin },
  { path: '/register', component: Register },
  { path: '/author', component: Author },
  { path: '/home', component: Home }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
