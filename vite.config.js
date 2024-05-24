import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-69",
    project: "javascript-react"
  })],

  server: {
    host: '0.0.0.0', // Set to your local IP address
  },

  build: {
    sourcemap: true
  }
})