const { isDev, isProd, ifDev } = require('../build-utils');

const babelClientEnvironment = {
  babelrc: false,
  cacheDirectory: true,
  cacheCompression: isProd,
  presets: [
    ['@babel/preset-env', { modules: false, useBuiltIns: 'entry' }],
    ['@babel/preset-react', { development: isDev, useBuiltIns: true }],
  ],
  plugins: [
    'babel-plugin-macros',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-async-generators',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-transform-destructuring', { useBuiltIns: true }],
    ['@babel/plugin-transform-runtime', { helpers: false, regenerator: true }],
    'react-loadable/babel',
    ['emotion', { autoLabel: isDev, hoist: isProd, sourceMap: isDev }],
    ifDev('react-hot-loader/babel'),
    ifDev('console'),
  ].filter(Boolean),
};

const babelNodeEnvironment = {
  babelrc: false,
  cacheDirectory: true,
  cacheCompression: isProd,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
        useBuiltIns: 'entry',
      },
    ],
  ],
  plugins: [
    'babel-plugin-macros',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-async-generators',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-transform-destructuring', { useBuiltIns: true }],
    ['@babel/plugin-transform-runtime', { helpers: false, regenerator: true }],
    ifDev('console'),
    'lodash',
  ].filter(Boolean),
};

module.exports = {
  client: babelClientEnvironment,
  server: babelNodeEnvironment,
};
