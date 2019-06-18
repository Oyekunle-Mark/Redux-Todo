module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "airbnb",
  parser: "babel-eslint",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": 0,
    "quotes": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "no-underscore-dangle": 0,
    "no-shadow": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "object-curly-newline": 0,
    "curly": 0,
    "nonblock-statement-body-position": 0,
    "react/button-has-type": 0
  }
};
