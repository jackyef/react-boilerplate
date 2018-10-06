require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const fs = require('fs-extra');

const sharedModule = require('./shared.config');

const outputPath = path.resolve(__dirname, '../build/client');

fs.emptyDirSync(outputPath);

module.exports = {
  entry: {
    client: [
      // 'babel-polyfill', 
      './src/client/index.js'
    ],
  },
  target: 'web', //tells webpack that this build will be run in browsers
  output: {
    filename: '[name].js', // will use the key value in entry as the name, in this case, it's 'client'
    path: outputPath,
  },
  module: {
    ...sharedModule,
    rules: [
      {
        test: /\.js$/, // regex that matches the files that this loader should be handling
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['env', { modules: false, useBuiltIns: true }],
              ],
              plugins: ['syntax-dynamic-import'],
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name (_file) {
                if (process.env.NODE_ENV === 'development') {
                  return '[path][name].[ext]';
                } else {
                  return '[hash].[ext]';
                }
              }
            },
          }
        ]
      },
    ],
  },
  plugins: [
    new CompressionPlugin(),
    new HtmlWebpackPlugin({ template: 'src/client/index.html' }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  optimization: {
    nodeEnv: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: 'verbose',
          sourceMap: true,
          compress: {
            warnings: true,
            keep_fnames: false,
            passes: 1, // more compressions!
          },
          mangle: false,
          keep_fnames: false,
          keep_classnames: false,
          ie8: false, // screw ie8
          safari10: true, // can't screw safari 10 yet
          output: {
            beautify: false,
            comments: false
          }
        }
      }),
    ],
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
};
