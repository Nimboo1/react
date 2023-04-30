import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: true,
    port: 3001,
    watch: {
      ignored: ['**/coverage/**'],
    },
  },
  build: {
    sourcemap: true,
  },
});
