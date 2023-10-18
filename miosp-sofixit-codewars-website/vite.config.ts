import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/miosp_sofixit_codewars/',
  build: {
    outDir: '../docs',
  },
})
