require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sharedModule = require('./shared.config');

module.exports = {
  entry: {
    client: './src/client/index.js',
  },
  target: 'web', //tells webpack that this build will be run in browsers
  output: {
    filename: '[name].js', // will use the key value in entry as the name, in this case, it's 'client'
    path: path.resolve(__dirname, '../dist/public'),
  },
  module: sharedModule,
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/client/index.html' })
  ],
  mode: process.env.ENVIRONMENT === 'development' ? 'development' : 'production',
  serve: {
    host: 'localhost',
    port: process.env.PORT,
  },
};
