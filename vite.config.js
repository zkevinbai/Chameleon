import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://zkevinbai.github.io/Chameleon/ via gh-pages
export default defineConfig({
  plugins: [react()],
  base: '/Chameleon/',
  build: {
    outDir: 'build',
  },
})
