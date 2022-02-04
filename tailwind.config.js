const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      // const tailwindColors = Object.keys(theme('colors')).map(
      //   (color) => theme('colors')[color],
      // );
      // console.log(tailwindColors);
      flatColors = {};
      nestedColors = {};
      flattedNestedColors = {};
      Object.keys(theme('colors')).forEach(color => {
        if (typeof theme('colors')[color] === 'string') {
          flatColors[color] = theme('colors')[color];
        }
        else {
          nestedColors[color] = theme('colors')[color];
          flattedVariants = {};
          Object.keys(theme('colors')[color]).forEach(variant => {
            flattedVariants[`--tw-var-color-${variant}`] = theme('colors')[color][variant];
          });
          flattedNestedColors[color] = flattedVariants;
        }
      });

      // // Flat colors
      // css = {
      //   'var': (value) => ({
      //     '--tw-var-color': value
      //   }),
      // };
      // matchUtilities(
      //   css,
      //   { values: flatColors, type: 'color' },
      // );

      // !! Flatted nested colors
      matchUtilities(
        {
          'var': (value) => value
          ,
        },
        { values: flattedNestedColors, type: 'color' },
      );

      // // Nested colors
      // Object.keys(nestedColors).forEach(color => {
      //   // e. g. var-color-red-50
      //   css = {};
      //   css[`var-${color}`] = (value) => ({
      //     '--tw-var-color': value
      //   });
      //   matchUtilities(
      //     css,
      //     { values: nestedColors[color], type: 'color' },
      //   );
      // });
    }),
  ]
}
