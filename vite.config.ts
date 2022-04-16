import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

const path = require('path');

// const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Tailit Components',
      // formats: ['es'],
      fileName: (format) => `tailit-components.${format}.js`,
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
      input: {
        // index: path.resolve(__dirname, 'src/index.ts'),
        main: path.resolve(__dirname, 'index.html'),
      },
      // output: [
      //   {
      //     chunkFileNames: 'tailit/chunked/[name].js',
      //     entryFileNames: 'tailit/[name].mjs',
      //     exports: 'named',
      //     format: 'esm',
      //     assetFileNames: ({ name }) => {
      //       if (/\.css$/.test(name ?? '')) {
      //         return 'tailit/chunked/[name][extname]';
      //       }
      //       return 'tailit/chunked/[name][extname]';
      //     },
      //   },
      //   {
      //     inlineDynamicImports: true,
      //     dir: 'dist',
      //     entryFileNames: 'tailit/[name].js',
      //     assetFileNames: ({ name }) => {
      //       if (/\.css$/.test(name ?? '')) {
      //         return 'tailit/[name][extname]';
      //       }
      //       return 'tailit/[name][extname]';
      //     },
      //   },
      // ],
      // external: /^lit/,
      plugins: [
        minifyHTML(),
        terser({
          compress: {
            defaults: true,
            passes: 2,
          },
          mangle: true,
        }),
      ],
    },
  },
});
