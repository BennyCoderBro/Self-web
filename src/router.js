import { createRouter, createWebHashHistory } from 'vue-router';

// 确认导入路径和大小写一致
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Admin from './components/Admin.vue';
import Register from './components/Register.vue';
import Author from './components/Author.vue';
import Home from '../src/components/Home.vue';
import Profolio from '../src/components/Profolio.vue';

const routes = [
  { path: '/', redirect: '/profolio' },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/admin', component: Admin },
  { path: '/register', component: Register },
  { path: '/author', component: Author },
  { path: '/home', component: Home },
  { path: '/profolio', component: Profolio}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
