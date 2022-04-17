module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:wc/recommended',
    'plugin:lit/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript/base',
      ],
      rules: {
        'import/extensions': 0, // Some lit modueles have to be imported with ".js"-suffix
        'max-classes-per-file': 0, // Needed for headless components
        'no-shadow': 0, // Needed for headless components
        '@typescript-eslint/no-shadow': 0, // Needed for headless components
      },

      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json', 'vite.lib.config.ts', 'vite.config.ts'], // Specify it only for TypeScript files
        tsconfigRootDir: __dirname,
      },
    },
  ],
  plugins: ['@typescript-eslint', 'eslint-plugin-lit'],
};
