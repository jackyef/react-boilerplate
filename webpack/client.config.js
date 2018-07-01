require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const sharedModule = require('./shared.config');

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
    path: path.resolve(__dirname, '../dist/public'),
  },
  module: sharedModule,
  plugins: [
    new UglifyJSPlugin(),
    new CompressionPlugin(),
    new HtmlWebpackPlugin({ template: 'src/client/index.html' }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    nodeEnv: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    minimize: process.env.NODE_ENV === 'production',
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
  serve: {
    host: 'localhost',
    port: process.env.PORT,
  },
};
