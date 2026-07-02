import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 5180,
    strictPort: false,
    open: true,
  },
  preview: {
    port: 5180,
    strictPort: false,
    open: true,
  },
});
