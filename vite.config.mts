import { resolve } from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: resolve('./src'),
  base: '/static/',
  server: {
    host: '127.0.0.1',
    port: 56_001,
    open: false,
    hmr: {
      host: '127.0.0.1',
      port: 56_001,
    },
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: resolve('./src/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2022',
    rollupOptions: {
      input: {
        main: resolve('./src/entrypoints/main.tsx'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
});
