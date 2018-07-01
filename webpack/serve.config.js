require('dotenv').config();
const path = require('path');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const webpackClientConfig = require('./client.config');

webpackClientConfig.serve = {
  dev: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    publicPath: `http://${process.env.WEBPACK_HOST}:${process.env.WEBPACK_PORT}`,
    logLevel: 'silent',
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 1000,
    },
  },
  hot: {
    host: process.env.WEBPACK_HOST || 'localhost',
    port: Number(process.env.WEBPACK_PORT) + 1,
    hmr: true,
  },
  host: process.env.WEBPACK_HOST || 'localhost',
  port: process.env.WEBPACK_PORT,
  add: (app, _middleware, _options) => {
    app.use(convert(history()));
  },
};

module.exports = webpackClientConfig;
