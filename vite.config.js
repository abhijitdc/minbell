import { defineConfig } from 'vite';

export default defineConfig({
  base: '/minbell/', // Set base path for GitHub Pages
  test: {
    globals: true,
    environment: 'jsdom',
  },
});