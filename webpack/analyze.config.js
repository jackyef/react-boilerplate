const webpackConfig = require('./client.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

webpackConfig.plugins = [
  ...webpackConfig.plugins,
  new BundleAnalyzerPlugin(),
];

module.exports = webpackConfig;
