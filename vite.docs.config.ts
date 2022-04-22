import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import handlebars from 'vite-plugin-handlebars';
import { terser } from 'rollup-plugin-terser';
import context from './docs/context';
import WindiCSS from 'vite-plugin-windicss';


const path = require('path');

const getFilesFromNavigation = () => {
  const input: any = {};
  Object.keys(context.pages).map(
    (entry) => { input[entry] = path.resolve(__dirname, `${entry}.html`); }
  );
  console.log(input);
  return { ...input, index: path.resolve(__dirname, 'index.html') };
};

const getCurrentContent = (currentPath) => {
  const cleanedPath = currentPath.replace('/', '').replace('.html', '');
  const currentPageData = context.pages[cleanedPath];
  const navigation = Object.keys(context.pages).map(
    (entry) => { return { link: `/${entry}.html`, title: context.pages[entry].title, current: cleanedPath === entry }; }
  );
  const newContext = {
    ...context,
    ...currentPageData,
    navigation
  };
  // console.log(newContext);
  return newContext;
};

process.env.VITE_BUILD = 'docs';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: getFilesFromNavigation(),
      output: {
        // inlineDynamicImports: true,
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
      plugins: [
        minifyHTML(),
        terser({ compress: { defaults: true, passes: 2 }, mangle: true }),
      ],
    },
  },
  plugins: [
    WindiCSS(),
    handlebars({
      context(pagePath) {
        return getCurrentContent(pagePath);
      },
      partialDirectory: path.resolve(__dirname, 'docs/partials'),
    }),
  ],
});
