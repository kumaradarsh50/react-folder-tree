module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true, // for node globals, such as 'module'
    jest: true, // for jest globals, such as 'test' and 'expect'
  },
  // 'plugins' section only 'activate' these plugins
  // still need manually edit 'rules' to actually use them
  // such as { react/xxx: 'error' }
  plugins: [
    'react',
  ],
  // 'extends' section will extend these configs
  // and they will take effect directly
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    indent: [2, 2],
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'max-len': 0,
    'react/jsx-filename-extension': 0,
  },

  // don't know what these are... generated by eslint --init
  // TODO: do more research about these
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};