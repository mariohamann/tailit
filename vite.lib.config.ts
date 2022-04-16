import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/bundle',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Tailit Components',
      formats: ['es', 'umd'],
      fileName: (format) => `tailit-components.${format}.js`,
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: 'tailit-components[extname]',
      },
      plugins: [
        minifyHTML(),
        terser({ compress: { defaults: true, passes: 2 }, mangle: true }),
      ],
    },
  },
});
