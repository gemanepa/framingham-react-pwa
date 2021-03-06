module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    "allowImportExportEverywhere": true
  },
  plugins: [
    'react',
  ],
  rules: {
    "default-case": "off",
    "linebreak-style": "off",
    "camelcase": "off",
    "comma-dangle": 0,
    "max-len": ["error", { "code": 120 }]
  },
  ignorePatterns: [".next/", "node_modules/"],
  "overrides": [
    {
      "files": ["tests/**/*.js"],
      "rules": {
        "no-undef": "off",
        "no-unused-expressions": "off",
        "max-len": "off"
      }
    }
  ],
};
