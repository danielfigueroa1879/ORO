import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repositorio/',  // Reemplaza con el nombre real de tu repositorio
})
