<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50">
      <!-- Header -->
      <header class="bg-blue-600 text-white shadow-md">
        <div class="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" class="w-10 h-10 rounded-full">
            <h1 class="text-2xl font-bold">文具管理系统</h1>
          </div>
  
          <!-- User Dropdown -->
          <div class="relative group mt-4 md:mt-0">
            <div class="flex items-center space-x-2 cursor-pointer">
              <img src="/user-avatar.jpg" alt="User Avatar" class="w-10 h-10 rounded-full">
              <span class="text-lg">管理员</span>
            </div>
            <ul
              class="absolute right-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-y-0 translate-y-2">
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">个人主页</li>
              <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">退出登录</li>
            </ul>
          </div>
  
          <!-- Project Info Button -->
          <button class="mt-4 md:mt-0 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
            项目介绍
          </button>
        </div>
      </header>
  
      <!-- Body -->
      <main class="container mx-auto px-4 py-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Feature Cards -->
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 class="text-xl font-semibold text-gray-800">{{ feature.title }}</h2>
            <p class="text-gray-600 mt-2">{{ feature.description }}</p>
            <button
              class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <span>{{ feature.action }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        features: [
          { title: "数据查看", description: "查看和管理库存数据。", action: "前往" },
          { title: "上传文件", description: "上传和处理 Excel 文件。", action: "上传" },
          { title: "销售分析", description: "查看销售趋势和分析图表。", action: "查看" },
          { title: "采购管理", description: "管理采购订单和跟踪状态。", action: "管理" },
          { title: "日志记录", description: "查看操作记录以确保安全。", action: "查看日志" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  header {
    position: sticky;
    top: 0;
    z-index: 50;
  }
  
  .group ul {
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: translateY(-10px);
  }
  
  .group:hover ul {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  