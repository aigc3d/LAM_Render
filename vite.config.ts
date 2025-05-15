// vite.config.ts 示例
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: "./",
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  }
})