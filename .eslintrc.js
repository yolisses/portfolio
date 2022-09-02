module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'react',
  ],
  overrides: [],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/extensions':'off',
    'react/react-in-jsx-scope':'off',
    'import/prefer-default-export':'off',
    'import/no-extraneous-dependencies':'off',
  },
};
