<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">用户登录</h1>

    <!-- 错误和成功提示 -->
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <div v-if="success" class="alert alert-success" role="alert">
      {{ success }}
    </div>

    <!-- 登录表单 -->
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="username" class="form-label">用户名</label>
        <input 
          type="text" 
          id="username" 
          v-model="username" 
          class="form-control" 
          placeholder="输入用户名" 
          required 
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">密码</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          class="form-control" 
          placeholder="输入密码" 
          required 
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">登录</button>
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
      error: '',
      success: ''
    };
  },
  methods: {
    async handleLogin() {
      // 校验用户名和密码是否为空
      if (!this.username || !this.password) {
        this.error = '用户名和密码不能为空！';
        this.success = '';
        return;
      }

      try {
        const response = await axios.post(
          'http://127.0.0.1:5000/auth/login',
          {
            UserName: this.username, // 确保字段名与后端一致
            Password: this.password
          },
          {
            headers: {
              'Content-Type': 'application/json' // 确保设置请求头
            }
          }
        );

        // 存储 Token 和角色信息
        const { token, refresh_token } = response.data;
        localStorage.setItem('token', token); // 可以改为 sessionStorage，根据需求
        localStorage.setItem('refresh_token', refresh_token);

        this.success = '登录成功！';
        this.error = '';

        // 跳转到 Dashboard 页面
        this.$router.push('/dashboard');
      } catch (err) {
        // 错误处理
        if (err.response) {
          this.error = err.response.data.message || '登录失败，请检查用户名或密码！';
        } else {
          this.error = '无法连接服务器，请稍后再试！';
        }
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
