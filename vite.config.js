import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({ dirs: ['src/components/ui'] }),
    AutoImport({
      imports: [
        'vue'],
    }),
    WindiCSS(),
  ],

})
