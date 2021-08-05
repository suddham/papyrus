import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import compress from 'vite-plugin-compress'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
    compress(),
    viteCompression(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  server: {
    open: true,
  },
})
