import path from 'path';
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';
import appRootDir from 'app-root-dir';

import sharedModule from './shared.config.babel';
import { ifDev, isDev, service, serverEnv } from './utils';

const developmentPlugins = () => {
  if (process.env.ENVIRONMENT === 'development') {
    const StartServerPlugin = require('start-server-webpack-plugin');

    return [
      new StartServerPlugin('server.js'),
      new webpack.HotModuleReplacementPlugin(),
    ];
  }
  
  return [];
}

module.exports = {
  target: 'node', //tells webpack that this build will be run in node env

  /**
   * The base directory
   * for resolving entry point
   */
  context: appRootDir.get(),

  /**
   * Define perfomance hints for assets
   * and entrypoints that exceed file limit
   */
  performance: false,

  entry: {
    server: [
      ...ifDev(['webpack/hot/poll?1000'], []),
      path.resolve(appRootDir.get(), `./src/${service}/${ifDev('index', 'server')}.js`),
    ],
  },

  watch: isDev, // for HMR

  output: {
    filename: '[name].js',
    path: path.resolve(appRootDir.get(), `./build/${service}`),
  },

  module: sharedModule,
  devtool: ifDev('cheap-module-source-map', '(none)'),
  externals: [
    nodeExternals({
      whitelist: [
        ...ifDev(['webpack/hot/poll?1000'], ['source-map-support/register']),
        /\.(svg|png|jpg|jpeg|gif|ico)$/,
        /\.(css|scss|sass|sss|less)$/,
      ],
    }),
  ],
  mode: ifDev('development', 'production'),
  plugins: [
    ...developmentPlugins(),
    /**
     * For injecting global vars
     */
    new webpack.DefinePlugin(serverEnv),
    /**
     * Enable source map on server
     */
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install({ environment: "node" });',
      raw: true,
      entryOnly: false,
    }),
  ],

  node: false,
};