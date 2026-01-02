import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/PortoFolio/',
  plugins: [react()],
  test :{
    coverage: {
      all: true,
      reporter: ['lcov','text', 'html', 'text-summary'],
    },
    css :true,
    environment: 'jsdom',
    globals: true,
  },
})