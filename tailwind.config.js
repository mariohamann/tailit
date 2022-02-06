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

      const variablesPalette = Object.keys(theme('colors.var'));
      const twoLevelVariables = {};

      variablesPalette.forEach(variable => twoLevelVariables[variable] = {});

      Object.keys(theme('colors')).forEach(colorKey => {
        const colorValue = theme('colors')[colorKey];
        if (typeof colorValue === 'string') {
          // set var-50-black, var-100-black etc.
          variablesPalette.forEach(variable =>
            twoLevelVariables[variable][colorKey] = colorValue
          );
        }
        else {
          const flattedVariants = {};
          Object.keys(colorValue).forEach(variant => {
            // set var-50-red, var-100-red, var-50-sky etc.
            twoLevelVariables[variant][colorKey] = colorValue[variant];
          });
        }
      });

      // Set oneLevelVariables
      matchUtilities(
        {
          'var': (color) => {
            if (typeof color === 'string') {
              const output = {};
              variablesPalette.forEach(variant => {
                output[`--tw-var-color-${variant}`] = color;
              });
              return output;
            } else {
              const output = {};
              variablesPalette.forEach(variant => {
                output[`--tw-var-color-${variant}`] = color[variant];
              });
              return output;
            }
          },
        },
        { values: theme('colors'), type: 'color' },
      );

      // Set twoLevelVariables
      Object.keys(twoLevelVariables).forEach(variant => {
        // e. g. var-color-red-50
        matchUtilities(
          {
            [`var-${variant}`]: (value) => ({
              [`--tw-var-color-${variant}`]: value
            })
          },
          { values: twoLevelVariables[variant], type: 'color' },
        );
      });
    }),
  ]
}
