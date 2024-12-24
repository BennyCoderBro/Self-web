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
          <label for="role" class="form-label">角色</label>
          <select id="role" v-model="role" class="form-control">
            <option value="user">用户</option>
            <option value="admin">管理员</option>
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
        role: 'user',
        error: '',
        success: ''
      };
    },
    methods: {
      async handleRegister() {
        try {
          const response = await axios.post('http://127.0.0.1:5000/register', {
            username: this.username,
            password: this.password,
            role: this.role
          });
          this.success = response.data.message;
          this.error = '';
          this.$router.push('/login');
        } catch (err) {
          this.error = '注册失败，请检查输入信息！';
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
  