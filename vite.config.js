import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: '0.0.0.0', // This binds the server to all network interfaces, allowing access from other devices
    port: 5173,
  },
  plugins: [react()],
  base: '/aks/',  // Replace with your repository name
});
