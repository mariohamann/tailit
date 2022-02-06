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

      const possibleVariables = Object.keys(theme('colors.var'));
      const oneLevelVariables = {};
      const twoLevelVariables = {};

      possibleVariables.forEach(variable => twoLevelVariables[variable] = {});

      Object.keys(theme('colors')).forEach(colorKey => {
        const colorValue = theme('colors')[colorKey];
        if (typeof colorValue === 'string') {
          // Sets var-black, var-transparent etc.
          oneLevelVariables[colorKey] = colorValue;
          // set var-50-black, var-100-black etc.
          possibleVariables.forEach(variable =>
            twoLevelVariables[variable][colorKey] = colorValue
          );
        }
        else {
          const flattedVariants = {};
          Object.keys(colorValue).forEach(variant => {
            // set var-50-red, var-100-red, var-50-sky etc.
            twoLevelVariables[variant][colorKey] = colorValue[variant];
            // set var-red, var-indigo, var-sky etc.
            flattedVariants[`--tw-var-color-${variant}`] = colorValue[variant];
          });
          // set var-red, var-indigo, var-sky etc.
          oneLevelVariables[colorKey] = flattedVariants;
        }
      });

      // Set oneLevelVariables
      matchUtilities(
        {
          'var': (value) => {
            if (typeof value === 'string') {
              const output = {};
              possibleVariables.forEach(variant => {
                output[`--tw-var-color-${variant}`] = value;
              });
              return output;
            } else {
              return value;
            }
          },
        },
        { values: oneLevelVariables, type: 'color' },
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
