module.exports = {
  extends: [
    'eslint:recommended',
    'universe',
    'universe/native',
    'universe/web',
    'universe/shared/typescript-analysis',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: ['react-hooks'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    'react/jsx-boolean-value': ['warn', 'always'],
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
  },
  env: {
    node: true,
  },
};
