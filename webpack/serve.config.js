require('@babel/register');
require('dotenv').config();

const webpackClientConfig = require('./client.config').default;

const host = process.env.CLIENT_HOST;
const port = process.env.CLIENT_PORT;

webpackClientConfig.devServer = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
  historyApiFallback: true,
  host,
  hot: true,
  logLevel: 'silent',
  port,
  publicPath: webpackClientConfig.output.publicPath,
  overlay: {
    warnings: false,
    errors: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 1000,
  },
};

module.exports = webpackClientConfig;
