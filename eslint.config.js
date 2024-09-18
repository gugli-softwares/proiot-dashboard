import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist', 'node_modules'], // Ignore common folders
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'], // Apply to both TypeScript and JavaScript files
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      // Best Practices
      'prefer-const': 'error', // Use const whenever possible
      'no-var': 'error', // Disallow var, use let or const instead
      eqeqeq: ['error', 'always'], // Require === and !==
      curly: ['error', 'all'], // Enforce consistent brace style for all control statements

      // Code Style
      'no-nested-ternary': 'error', // Disallow nested ternaries
      'arrow-parens': ['error', 'always'], // Require parentheses around arrow function arguments
      'object-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside braces
      'array-bracket-spacing': ['error', 'never'], // Disallow spaces inside array brackets
      semi: ['error', 'always'], // Enforce semicolons
      quotes: ['error', 'single', { avoidEscape: true }], // Enforce single quotes

      // React Specific
      'react/jsx-uses-react': 'off', // Not needed in React 17+
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/jsx-no-bind': 'warn', // Warn on binding in JSX
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript

      // React Hooks
      ...reactHooks.configs.recommended.rules, // Include React Hooks recommended rules

      // React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Warn on improper usage with React Refresh

      // TypeScript Specific
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Enforce using interface over type for object types
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Error on unused variables, but allow unused arguments starting with _
      '@typescript-eslint/explicit-function-return-type': 'off', // Disable explicit return types on functions

      // Prettier Integration
      'prettier/prettier': 'error', // Enforce Prettier formatting
      ...prettierConfig.rules, // Include Prettier configuration to avoid conflicts
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
]
