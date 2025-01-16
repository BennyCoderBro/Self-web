import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // 已采用静态导入，无需修改


export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.json', '.vue'], // 添加 .vue 扩展名解析支持
  },
  base: './'
});
