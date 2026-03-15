import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: [],
  },
  server: {
    fs: { allow: ['.'] },
  },
  // Tell Vite only the root index.html is the entry, ignore nested HTML files
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
})
