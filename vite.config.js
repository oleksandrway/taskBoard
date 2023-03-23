import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // implementation: sass,
        additionalData: '@import "@/scss/variables.scss";',
      },
    },
  },
  plugins: [vue(),
    Components({ dirs: ['src/components/ui'] }),
    AutoImport({
      imports: [
        'vue'],
    }),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@comp': path.resolve(__dirname, 'src/components'),
    },
  },

})
