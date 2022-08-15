import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

process.env.VITE_BUILD = 'lib';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    outDir: 'dist/lib',
    // lib: {
    //   entry: path.resolve(__dirname, 'src/index.ts'),
    //   name: 'Tailit Components',
    //   fileName: (format) => `tailit-components.${format}.js`,
    // },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.ts'),
      },
      output: {
        entryFileNames: 'tailit-components.js',
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
