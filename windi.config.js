import { defineConfig } from 'windicss/helpers';

// const colors = require('windicss/colors');

export default defineConfig({
  attributify: {
    prefix: 'class:',
  },
  theme: {
    extend: {
      colors: {
        var: {
          50: 'var(--tw-var-color-50)',
          100: 'var(--tw-var-color-100)',
          200: 'var(--tw-var-color-200)',
          300: 'var(--tw-var-color-300)',
          400: 'var(--tw-var-color-400)',
          500: 'var(--tw-var-color-500)',
          600: 'var(--tw-var-color-600)',
          700: 'var(--tw-var-color-700)',
          800: 'var(--tw-var-color-800)',
          900: 'var(--tw-var-color-900)',
        },
      },
      fontSize: {
        var: 'var(--tw-var-spacing)',
      },
      spacing: {
        var: 'var(--tw-var-spacing)',
      },
    },
  },
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      'src/**/*.{ts}',
      'docs/**/*.{html,ts,hbs}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
});
