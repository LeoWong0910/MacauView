import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      //Api1 New's Evenet in Macao
      '/rss': {
        target: 'https://whatson.macaotourism.gov.mo',
        changeOrigin: true,
        rewrite: (path) => path
      },
      //Api2 Macao's Bar & Restaurant
      '/dst_bars' : {
        target: 'https://dst.apigateway.data.gov.mo',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  }
})
