const webpack = require('webpack');
const appRootDir = require('app-root-dir');
const path = require('path');

const logError = require('debug')('build:error');

const webpackConfig = require(path.resolve(appRootDir.get(), `./webpack/server.config.js`)).default;

webpack(webpackConfig).watch(
  {
    aggregateTimeout: 300,
    poll: 1000,
  },
  err => {
    if (err) {
      logError(err.stack || err);

      if (err.details) {
        logError(err.details);
      }
    }
  }
);
