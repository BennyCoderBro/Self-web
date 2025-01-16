<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">用户注册</h1>

    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <div v-if="success" class="alert alert-success" role="alert">
      {{ success }}
    </div>

    <form @submit.prevent="handleRegister">
      <div class="mb-3">
        <label for="username" class="form-label">用户名</label>
        <input type="text" id="username" v-model="username" class="form-control" placeholder="输入用户名" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">密码</label>
        <input type="password" id="password" v-model="password" class="form-control" placeholder="输入密码" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" placeholder="输入邮箱" required />
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">角色</label>
        <select id="role" v-model="role" class="form-control">
          <option value="user">User</option>
          <option value="admin">Adminstration</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary w-100">注册</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      email: '', // 添加 email 数据绑定
      role: 'user',
      error: '',
      success: ''
    };
  },
  methods: {
    async handleRegister() {
      if (!this.email.includes('@')) {
        this.error = '请输入有效的邮箱地址！';
        return;
      }
      try {
        const response = await axios.post('http://127.0.0.1:5000/auth/register', {
          UserName: this.username,
          Password: this.password,
          Email: this.email,
          Role: this.role
        });
        this.success = response.data.message;
        this.error = '';
        this.$router.push('/login');
      } catch (err) {
        this.error = err.response?.data?.message || '注册失败，请检查输入信息！';
        this.success = '';
      }
    }
  }
};
</script>

<style>
.container {
  max-width: 100%;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
