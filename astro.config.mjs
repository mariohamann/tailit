// astro.config.mjs
import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit/src/index';
// import path from 'path';

process.env.VITE_BUILD = 'docs';

// https://astro.build/config
export default defineConfig({
  root: 'docs',
  srcDir: 'docs',
  outDir: 'dist/docs',
  // site: 'https://www.tailit.dev',
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['lit', '@lit', '@lit/lit-element', '@lit/reactive-element', '@lit/*'],
    },
  },
  integrations: [lit()],
});
