import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests', workers: 1,
  use: { channel: 'chrome', baseURL: 'http://127.0.0.1:4413/light-blue-vue-admin/', viewport: { width: 1440, height: 1000 }, trace: 'retain-on-failure' },
  webServer: { command: 'npm run preview -- --host 127.0.0.1 --port 4413 --strictPort', url: 'http://127.0.0.1:4413/light-blue-vue-admin/' }
})
