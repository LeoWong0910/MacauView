import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/rss': {
        target: 'https://whatson.macaotourism.gov.mo',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  }
})
