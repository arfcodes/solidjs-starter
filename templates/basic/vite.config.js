import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '@src': resolve('src'),
      '@components': resolve('src/components'),
      '@services': resolve('src/services'),
      '@pages': resolve('src/pages'),
    },
  },
});
