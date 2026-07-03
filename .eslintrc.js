module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
  ],
  plugins: ['prettier'],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'prettier/prettier': 'warn',

    // This is a personal site, not a library — default exports are fine.
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',

    // We use TypeScript for prop typing; prop-types are redundant.
    'react/prop-types': 'off',

    // The codebase consistently uses arrow-function components.
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],

    // Static, never-reordered lists (ASCII art, command tables) — index keys
    // are fine here.
    'react/no-array-index-key': 'off',

    // The terminal renders command output as HTML on purpose (see History.tsx),
    // and command handlers legitimately touch window / external APIs.
    'react/no-danger': 'off',

    // A terminal prompt should grab focus on load.
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',

    // index.ts re-exports the command modules that import it back — an
    // intentional aggregator cycle.
    'import/no-cycle': 'off',

    // A classic counting for-loop is fine.
    'no-plusplus': 'off',

    // Command handlers take (args: string[]) but many don't use it — keep the
    // uniform signature without warnings.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^args$|^_' },
    ],

    // The GitHub API responses are untyped; allow `any` where it's pragmatic.
    '@typescript-eslint/no-explicit-any': 'off',

    'react-hooks/exhaustive-deps': 'off',
  },
  ignorePatterns: ['dist', 'node_modules', 'vite.config.ts', '.eslintrc.js'],
};
