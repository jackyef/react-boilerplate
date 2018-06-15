const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
};

module.exports = [client, server];
