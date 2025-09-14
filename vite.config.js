import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Set base path for root domain deployment
  test: {
    globals: true,
    environment: 'jsdom',
  },
});