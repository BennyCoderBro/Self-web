import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.json', '.vue'], // 添加 .vue 扩展名解析支持
  },
  base: '/Self-web/' // 设置 publicPath 为 /Self-web/
});