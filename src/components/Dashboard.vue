<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">用户控制面板</h1>

    <!-- 提示信息 -->
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <div v-if="success" class="alert alert-success" role="alert">
      {{ success }}
    </div>

    <!-- 用户信息展示 -->
    <div v-if="username && role" class="card mb-4">
      <div class="card-body">
        <h3 class="card-title">欢迎, {{ username }}</h3>
        <p class="card-text">当前角色: <strong>{{ role }}</strong></p>
        <p class="card-text">登录时间: {{ loginTime }}</p>
      </div>
    </div>

    <!-- 管理员功能 (仅管理员显示) -->
    <div v-if="role === 'admin'" class="card mb-4">
      <div class="card-body">
        <h4 class="card-title">管理员操作</h4>
        <button class="btn btn-primary me-2" @click="viewUsers">查看所有用户</button>
        <button class="btn btn-secondary" @click="manageRoles">管理用户角色</button>
      </div>
    </div>

    <!-- 常规用户功能 -->
    <div v-else class="card mb-4">
      <div class="card-body">
        <h4 class="card-title">用户操作</h4>
        <button class="btn btn-info me-2" @click="updateProfile">更新个人信息</button>
        <button class="btn btn-success" @click="viewActivity">查看我的活动</button>
      </div>
    </div>

    <!-- 登出按钮 -->
    <button class="btn btn-danger w-100" @click="logout">登出</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      role: '',
      loginTime: '',
      error: '',
      success: ''
    };
  },
  methods: {
    async fetchProfile() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/auth/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        this.username = response.data.UserName; // 确保字段与后端一致
        this.role = response.data.Role;
        this.loginTime = new Date().toLocaleString(); // 模拟登录时间，可从后端获取
        this.success = '用户信息加载成功！';
        this.error = '';
      } catch (err) {
        this.error = '加载用户信息失败，请重新登录！';
        this.success = '';
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.success = '登出成功！';
      this.error = '';
      setTimeout(() => {
        this.$router.push('/login');
      }, 1000);
    },
    viewUsers() {
      this.$router.push('/admin/users'); // 跳转到用户管理页面
    },
    manageRoles() {
      this.$router.push('/admin/roles'); // 跳转到角色管理页面
    },
    updateProfile() {
      this.$router.push('/profile/update'); // 跳转到个人信息更新页面
    },
    viewActivity() {
      this.$router.push('/user/activity'); // 跳转到活动查看页面
    }
  },
  mounted() {
    this.fetchProfile();
  }
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 50px;
}
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
