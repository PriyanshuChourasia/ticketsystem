import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    port:8084,
    strictPort:true,
    open:true,
    origin:'http://localhost::8084'
  }
})
