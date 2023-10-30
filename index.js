module.exports = {
  // Environment settings for ESLint
  env: {
    browser: true,   // Enable browser globals and APIs
    es2021: true,     // Use ECMAScript 2021 features
    mocha: true,      // Enable Mocha testing globals
    node: true,       // Enable Node.js global variables and scoping
  },
  globals: {
    i18nAPI: 'readonly',  // Define a global variable 'i18nAPI' as read-only
  },
  // Extends ESLint configurations
  extends: [
    'eslint:recommended',                   // ESLint recommended rules
    'airbnb-base',                          // Airbnb JavaScript style guide rules
    'plugin:@typescript-eslint/eslint-recommended',  // ESLint rules for TypeScript
    'plugin:@typescript-eslint/recommended',         // Recommended TypeScript rules
    'plugin:prettier/recommended',           // Prettier recommended rules
  ],
  // Specify the parser for TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,   // Use ECMAScript version 2020
    sourceType: 'module', // Use ES6 modules
    project: ['./tsconfig.dev.json'],  // Use the TypeScript project configuration file
  },
  // Enable TypeScript-specific ESLint rules
  plugins: ['@typescript-eslint'],
  // Customize ESLint rules
  rules: {
    'import/prefer-default-export': 'off',       // Disable the 'prefer-default-export' rule
    'import/no-extraneous-dependencies': ['off'], // Disable checking for extraneous dependencies
    'no-param-reassign': ['error', { props: false }], // Disallow reassigning function parameters
    curly: 'error',       // Enforce the use of curly braces in control statements
    '@typescript-eslint/lines-between-class-members': ['off'], // Disable TypeScript-specific rule
    '@typescript-eslint/no-shadow': ['off'],      // Disable TypeScript-specific rule
    'class-methods-use-this': ['off'],            // Disable the 'class-methods-use-this' rule
    camelcase: 'off',      // Disable camelCase variable naming convention
    'lines-between-class-members': ['off'],       // Disable lines between class members rule
    'no-shadow': 'off',   // Disable shadowing variable names rule
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],  // Specify rules for file extensions in imports
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'always',
        endOfLine: 'lf',
      },
    ],  // Specify Prettier formatting options
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Specify supported file extensions
      },
    },
  },
};
