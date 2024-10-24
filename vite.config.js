import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '192.168.252.187', // Allow access from external devices
    port: 3000, // You can specify any port here
  },
  plugins: [react()],
})


