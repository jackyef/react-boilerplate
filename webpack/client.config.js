require('@babel/register');
require('dotenv').config();

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LoadableWebpackPlugin from '@loadable/webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

import { ifDev, isProd } from './build-utils';
import { module as sharedModule, plugins as sharedPlugins } from './shared.config';

export default {
  entry: {
    main: ['./src/client/index.js'],
  },
  target: 'web', // tells webpack that this build will be run in browsers
  output: {
    filename: ifDev('[name].js','[name].[hash].js'),
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: `http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}/`,
  },
  module: {
    ...sharedModule,
    rules: [
      ...sharedModule.rules,
    ],
  },
  plugins: [
    ...sharedPlugins,
    new CompressionPlugin(),
    new HtmlWebpackPlugin({ template: 'src/client/index.html' }),
    new webpack.HashedModuleIdsPlugin(),
    new LoadableWebpackPlugin({
      writeToDisk: true,
    }),
  ],
  optimization: {
    nodeEnv: ifDev('development', 'production'),
    minimize: isProd,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

  /**
   * Controls how source maps are generated
   * (https://webpack.js.org/configuration/devtool/)
   */
  devtool: ifDev('cheap-module-eval-source-map', '(none)'),
};
