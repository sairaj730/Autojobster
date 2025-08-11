import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // Proxy API requests to the backend server
    // proxy: {
    //   '/api': 'http://localhost:3000',
    // },
  },
});