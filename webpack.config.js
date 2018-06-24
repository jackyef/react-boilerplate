require('dotenv').config();
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sharedModule = {
  rules: [
    {
      test: /\.js$/, // regex that matches the files that this loader should be handling
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    },
  ],
};

const client = {
  entry: {
    client: './src/client/index.js',
  },
  target: 'web', //tells webpack that this build will be run in browsers
  output: {
    filename: '[name].js', // will use the key value in entry as the name, in this case, it's 'client'
    path: path.resolve(__dirname, 'dist/public'),
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

const server = {
  entry: {
    server: './src/server/index.js',
  },
  target: 'node', //tells webpack that this build will be run in node env
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: sharedModule,
  externals: [ nodeExternals() ],
  mode: process.env.ENVIRONMENT === 'development' ? 'development' : 'production',
};

module.exports = [client, server];
