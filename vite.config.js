import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Set base path for root domain deployment
  build: {
    assetsDir: 'assets', // Ensure assets are placed in 'assets' directory
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});