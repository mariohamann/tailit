const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        var: 'var(--tw-var-spacing)'
      },
      colors: {
        primary: colors.sky,
        secondary: colors.orange,
        'var': {
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
        }
      },
      spacing: {
        'var': 'var(--tw-var-size)'
      }
    },
  },
  plugins: [
    require('@mariohamann/tailwindcss-var'),
  ]
}
