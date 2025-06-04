// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/couple-web/', // 👈 这里非常重要！对应你的仓库名
  plugins: [react()],
})
