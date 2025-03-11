<template>
    <div class="page-container">
      <!-- Header -->
      <header class="navbar">
        <div class="navbar-content">
          <!-- Logo -->
          <div class="navbar-logo">
            <img src="/logo.svg" alt="Logo" class="logo">
            <h1 class="navbar-title">齐享文具管理系统</h1>
          </div>
  
          <!-- User Dropdown -->
          <div class="navbar-user">
            <div class="user-info">
              <img src="/public/logo.svg" alt="User Avatar" class="avatar">
              <span class="username">管理员</span>
            </div>
            <ul class="user-menu">
              <li class="menu-item">个人主页</li>
              <li class="menu-item">退出登录</li>
            </ul>
          </div>
  
          <!-- Project Info Button -->
          <button class="info-button" @click="showInfoModal = true">
            项目介绍
          </button>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="main-content">
        <div class="modules-container">
          <!-- Feature Cards -->
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="module-card">
            <h2 class="module-title">{{ feature.title }}</h2>
            <p class="module-description">{{ feature.description }}</p>
            <button class="module-button">
              <span>{{ feature.action }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
  
          <!-- Dynamic Data Chart -->
          <div class="data-chart">
            <h3>示例数据图</h3>
            <canvas id="dataChart"></canvas>
          </div>
        </div>
      </main>
  
      <!-- Project Info Modal -->
      <div v-if="showInfoModal" class="modal-overlay" @click="showInfoModal = false">
        <div class="modal-content" @click.stop>
          <h2>项目介绍</h2>
          <p><strong>作者:</strong> 张三</p>
          <p><strong>项目描述:</strong> 针对传统行业文具办公进行数据化管理问题，并应用 LLM 和 AI 实现商业策划。</p>
          <button class="close-button" @click="showInfoModal = false">关闭</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js';
  
  export default {
    name: 'Home',
    data() {
      return {
        showInfoModal: false,
        features: [
          { title: "数据查看", description: "查看和管理库存数据。", action: "前往" },
          { title: "上传文件", description: "上传和处理 Excel 文件。", action: "上传" },
          { title: "销售分析", description: "查看销售趋势和分析图表。", action: "查看" },
          { title: "采购管理", description: "管理采购订单和跟踪状态。", action: "管理" },
          { title: "日志记录", description: "查看操作记录以确保安全。", action: "查看日志" },
        ],
      };
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = document.getElementById('dataChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['一月', '二月', '三月', '四月', '五月'],
            datasets: [
              {
                label: '销售额 (万元)',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .page-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .navbar {
    height: 5%;
    background-color: #1e3a8a;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  
  .navbar-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 85%;
  }
  
  .logo {
    height: 100%;
    max-height: 40px;
    width: auto;
    border-radius: 50%;
  }
  
  .navbar-title {
    font-size: 1.5em;
    font-weight: bold;
  }
  
  .navbar-user {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  
  .avatar {
    height: 100%;
    max-height: 40px;
    width: auto;
    border-radius: 50%;
  }
  
  .username {
    font-size: 1em;
  }
  
  .user-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: none;
    width: 200px;
  }
  
  .navbar-user:hover .user-menu {
    display: block;
  }
  
  .menu-item {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .menu-item:hover {
    background-color: #f1f1f1;
  }
  
  .info-button {
    background-color: #f59e0b;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .info-button:hover {
    background-color: #d97706;
  }
  
  .main-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 20px;
    background-color: #f3f4f6;
  }
  
  .modules-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .module-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: box-shadow 0.3s ease;
  }
  
  .module-card:hover {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.15);
  }
  
  .module-title {
    font-size: 1.2em;
    font-weight: bold;
    color: #1f2937;
  }
  
  .module-description {
    font-size: 1em;
    color: #4b5563;
  }
  
  .module-button {
    background-color: #3b82f6;
    color: white;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .module-button:hover {
    background-color: #2563eb;
  }
  
  .icon {
    height: 20px;
    width: 20px;
  }
  
  .data-chart {
    margin-top: 20px;
    text-align: center;
  }
  
  .chart-image {
    max-width: 100%;
    height: auto;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    text-align: center;
  }
  
  .close-button {
    background-color: #2563eb;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .close-button:hover {
    background-color: #1d4ed8;
  }
  </style>
  