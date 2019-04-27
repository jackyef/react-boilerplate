require('dotenv').config();

import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

import { ifDev, isDev, isProd } from './build-utils';
import { module as sharedModule, plugins as sharedPlugins } from './shared.config.js';

const developmentPlugins = () => {
  if (isDev) {
    // need to lazy load this plugin
    const StartServerPlugin = require('start-server-webpack-plugin');

    return [
      new StartServerPlugin('server.js'),
      new webpack.HotModuleReplacementPlugin(),
    ];
  }

  return [];
};

export default {
  entry: {
    server: ifDev('./src/server/index.dev.js', './src/server/index.js'),
  },
  target: 'node', // tells webpack that this build will be run in node env
  output: {
    filename: ifDev('[name].js', '[name].[hash].js'),
    path: path.resolve(__dirname, '../dist/server'),
  },
  module: sharedModule,
  externals: [nodeExternals()],
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: isDev,
      __PROD__: isProd,
      __CLIENT__: false,
      __SERVER__: true,
    }),
    ...sharedPlugins,
    ...developmentPlugins(),
  ].filter(Boolean)
};
