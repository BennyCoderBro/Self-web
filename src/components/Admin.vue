<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">管理员面板</h1>

    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <div v-if="success" class="alert alert-success" role="alert">
      {{ success }}
    </div>

    <div class="mb-3">
      <h3>欢迎, {{ username }}</h3>
      <p>角色: 管理员</p>
    </div>

    <button class="btn btn-danger" @click="logout">登出</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      error: '',
      success: ''
    };
  },
  methods: {
    async fetchProfile() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/profile', {
          headers: { 'x-access-token': localStorage.getItem('token') }
        });
        this.username = response.data.username;
        this.success = '管理员信息加载成功';
        this.error = '';
      } catch (err) {
        this.error = '加载管理员信息失败，请重新登录';
        this.success = '';
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.success = '登出成功！';
      this.error = '';
      setTimeout(() => {
        this.$router.push('/login');
      }, 1000);
    }
  },
  mounted() {
    this.fetchProfile();
  }
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
