import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
    //cypress
    exclude: ['node_modules', 'build'],
    // include: ['./src/tests/**/*.spec.js']
  }
})
