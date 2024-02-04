import { fileURLToPath, URL } from 'node:url'


import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl'
import vue from '@vitejs/plugin-vue';
import commonjs from '@rollup/plugin-commonjs';

// require = require('esm')(module);
// const { fileURLToPath, URL } = require('node:url');
// const { defineConfig } = require('vite');
// const { createGlslPlugin } = require('vite-plugin-glsl');
// const vue = require('@vitejs/plugin-vue');
// const commonjs = require('@rollup/plugin-commonjs');


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    glsl(),
    commonjs()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
