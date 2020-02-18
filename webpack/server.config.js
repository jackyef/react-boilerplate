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

    return [new StartServerPlugin('server.js'), new webpack.HotModuleReplacementPlugin()];
  }

  return [];
};

const config = {
  entry: {
    server: [
			"core-js/modules/es.promise",
			"core-js/modules/es.array.iterator",
			ifDev('webpack/hot/poll?1000'),
			ifDev('./src/server/index.dev.js', './src/server/index.js')].filter(
      Boolean
    ),
  },
  watch: ifDev(true, false),
  target: 'node', // tells webpack that this build will be run in node env
  output: {
    filename: ifDev('[name].js', '[name].[hash].js'),
    path: path.resolve(__dirname, '../dist/server'),
    publicPath: `http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}/`,
  },
  module: sharedModule,
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  devServer: ifDev(
    {
      contentBase: path.resolve(__dirname, '../dist/server'),
      hot: true,
    },
    {}
  ),
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  plugins: [
    ...developmentPlugins(),
    new webpack.DefinePlugin({
      __DEV__: isDev,
      __PROD__: isProd,
      __CLIENT__: false,
      __SERVER__: true,
    }),
    ...sharedPlugins,
  ].filter(Boolean),

  node: false,
};

export default config;
