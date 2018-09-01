import path from 'path';
import webpack from 'webpack';
import appRootDir from 'app-root-dir';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import fs from 'fs-extra';

import { ifDev, isProd, service, clientEnv, entryClient, buildPath } from './utils';
import sharedModule from './shared.config.babel';

const debug = require('debug')(`build:${service}`);

debug(`=> Purging folder '${buildPath}' ...`);
fs.emptyDirSync(buildPath);

if (!service) {
  throw new Error('SERVICE_NAME is undefined');
}

debug(`=> Building service: '${service}', entry: '${entryClient}', output: '${buildPath}/server.js'`);

module.exports = {
  entry: {
    client: ['./src/client/index.js'],
    vendors: [
      'babel-polyfill',
      'react',
      'react-dom',
      'redux',
      'react-emotion',
      'react-loadable',
      'connected-react-router',
      'react-redux',
      'react-router',
      'react-router-dom',
    ],
  },
  target: 'web', //tells webpack that this build will be run in browsers
  output: {
    filename: '[name].js', // will use the key value in entry as the name, in this case, it's 'client'
    path: path.resolve(appRootDir.get(), buildPath),
  },
  module: {
    ...sharedModule,
    rules: [
      ...sharedModule.rules,
      {
        test: /\.(png|jpe?g|gif|svg)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name (_file) {
                return ifDev('[path][name].[ext]', '[hash].[ext]');
              }
            },
          }
        ]
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin(),
    new CompressionPlugin(),
    new HtmlWebpackPlugin({ template: 'src/client/index.html' }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin(clientEnv),
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
  mode: ifDev('development', 'production'),
};
