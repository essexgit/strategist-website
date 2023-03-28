import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // start sever automatically
  server: {
    open: './index',
  },
  base: './',
});
