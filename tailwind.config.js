const colors = require('tailwindcss/colors');
const tailwindcssVar = require('@mariohamann/tailwindcss-var');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: process.env.VITE_BUILD !== 'lib'
    ? ['./index.html', './docs/**/*.{html,hbs,ts}', './src/components/**/*.ts']
    : ['./src/components/**/*.ts'],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.pink,
        neutral: colors.gray,
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
  plugins: [tailwindcssVar, plugin(({ addVariant }) => {
    // Add a `third` variant, ie. `third:pb-0`
    addVariant('not-disabled', '&:not([disabled])');
  })],
};
