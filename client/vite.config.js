import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://pos-app-mern-backend.vercel.app',
        changeOrigin: true,
        secure: true,
      }
    }
  },
});
