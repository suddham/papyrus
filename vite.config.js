import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import compress from 'vite-plugin-compress';
import viteCompression from 'vite-plugin-compression';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
    plugins: [
        vue({
            script: {
                refSugar: true
            }
        }),
        mkcert(),
        compress(),
        viteCompression()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@views': path.resolve(__dirname, 'src/views'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@store': path.resolve(__dirname, 'src/store'),
            tslib: 'tslib/tslib.es6.js'
        }
    },
    server: {
        open: true,
        https: true
    }
});
