import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/light-blue-vue-admin/' : '/',
  plugins: [vue({ template: { compilerOptions: { compatConfig: { MODE: 2 } } } })],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)), vue: '@vue/compat' },
    extensions: ['.mjs', '.js', '.ts', '.json', '.vue']
  }
}))
