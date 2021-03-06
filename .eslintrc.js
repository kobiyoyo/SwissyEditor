module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
     'airbnb-typescript',
     'airbnb/hooks',
     'plugin:@typescript-eslint/recommended',
     'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
      project: './tsconfig.json',
     }
};