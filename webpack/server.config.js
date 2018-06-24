require('dotenv').config();
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const sharedModule = require('./shared.config.js');

module.exports = {
  entry: {
    server: './src/server/index.js',
  },
  target: 'node', //tells webpack that this build will be run in node env
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/'),
  },
  module: sharedModule,
  externals: [ nodeExternals() ],
  mode: process.env.ENVIRONMENT === 'development' ? 'development' : 'production',
};