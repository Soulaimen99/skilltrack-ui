import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/logs': 'http://localhost:8081',
      '/api/auth': 'http://localhost:8081',
    },
    port: 3000,
  }
})
