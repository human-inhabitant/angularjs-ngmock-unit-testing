module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true
  },
  extends: [
    'airbnb-base'
  ],
  plugins: [
    'angular'
  ],
  globals: {
    angular: true,
    module: true,
    inject: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': 0,
    'no-use-before-define': 0
  },
  settings: {
    angular: 1
  }
};
