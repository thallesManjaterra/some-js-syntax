module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard',
    'esnext'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'import/no-common-js': false
  }
}
