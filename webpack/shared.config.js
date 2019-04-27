const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const babelConfig = require('./babel/babel.options');

const isServer = process.env.DIR === 'server';

module.exports = {
  module: {
    strictExportPresence: true,
    rules: [
      { 
        oneOf: [{
          test: /\.jsx?$/, // regex that matches the files that this loader should be handling
          exclude: /node_modules/,
          loaders: 'babel-loader',
          options: isServer ? babelConfig.server : babelConfig.client,
        }],
      }
    ],
  },

  plugins: [
    /**
     * Webpack progress plugin to see build progress
     */
    new SimpleProgressWebpackPlugin(),
  ]
};