import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({

  
  base:'/Fly-With-Us/',
  plugins: [react(),tailwindcss()],
})

/* Tailwind CSS config has been moved to tailwind.config.js */

