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
      spacing: {
        'var': 'var(--tw-var-size)'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      if(theme('colors.var')){
        const variablesPalette = Object.keys(theme('colors.var'));

        /*
        * Set one-level variables like var-red, var-indigo, var-[pink] etc.
        */

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
                  if(color[variant]){
                   output[`--tw-var-color-${variant}`] = color[variant];
                  } else if(color['DEFAULT']){
                   output[`--tw-var-color-${variant}`] = color['DEFAULT'];
                  }
                });
                return output;
              }
            },
          },
          { values: theme('colors'), type: 'color' },
        );


        /*
        * Set two-level variables like var-50-red, var-100-indigo, var-50-[pink] etc.
        * We need to transform the color palette from format "color.shade" to "shade.color"
        * Examples:
        * - red.50 ... red.900  ->  50.red   ... 900.red
        * - black               ->  50.black ... 900.black
        */

        const colorsAsEntries = Object.entries(theme('colors', {}));

        const getTransformedColors = (variant) => {
          const transformedColors = {};
          colorsAsEntries.forEach(([key, value]) => {
            if (typeof value === 'string') {
              transformedColors[key] = value
            }
            else {
              if(value[variant]){
                transformedColors[key] = value[variant]
              } else if(value['DEFAULT']) {
                transformedColors[key] = value['DEFAULT']
              }
            }
          });
          return transformedColors;
        }

        variablesPalette.forEach(variant => {
          matchUtilities(
            {
              [`var-${variant}`]: (value) => ({
                [`--tw-var-color-${variant}`]: value
              })
            },
            { values: getTransformedColors(variant), type: 'color' },
          );
        });
      }

      /*
      * Set size variables like var-3 etc. to be used for margins etc.
      */
      if(theme('spacing.var')){
        matchUtilities(
          {
            'var': (spacing) => ({
              '--tw-var-size': spacing
            }),
          },
          { values: theme('spacing', {})},
        );
      }
    }),
  ]
}
