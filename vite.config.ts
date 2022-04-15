import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Tailit Components',
      formats: ['es'],
      fileName: (format) => `tailit-components.${format}.js`,
    },
    rollupOptions: {
      // external: /^lit/
      plugins: [minifyHTML()],
    },
  },
});
