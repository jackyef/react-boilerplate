import path from 'path';
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';
import appRootDir from 'app-root-dir';
import fs from 'fs-extra';

import { ifDev, isDev, isProd, service, serverEnv, entryFile, buildPath } from './utils';

const debug = require('debug')(`build:${service}`);

const developmentPlugins = () => {
  if (isDev) {
    const StartServerPlugin = require('start-server-webpack-plugin');

    return [
      new StartServerPlugin('server.js'),
      new webpack.HotModuleReplacementPlugin(),
    ];
  }
  
  return [];
}

debug(`=> Purging folder '${buildPath}' ...`);
fs.emptyDirSync(buildPath);

if (!service) {
  throw new Error('SERVICE_NAME is undefined');
}

debug(`=> Building service: '${service}', entry: '${entryFile}', output: '${buildPath}/server.js'`);

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
      'babel-polyfill',
      ...ifDev(['webpack/hot/poll?1000'], []),
      path.resolve(appRootDir.get(), entryFile),
    ],
  },

  watch: isDev, // for HMR
  mode: ifDev('development', 'production'),

  output: {
    filename: '[name].js',
    path: path.resolve(appRootDir.get(), buildPath),
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: isDev,
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current',
                },
                modules: false,
                useBuiltIns: 'entry',
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            "babel-plugin-macros",
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose": true }],
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-export-namespace-from",
            ["@babel/plugin-proposal-object-rest-spread", { "useBuiltIns": true }],
            "@babel/plugin-proposal-optional-chaining",
            "@babel/plugin-syntax-async-generators",
            "@babel/plugin-syntax-dynamic-import",
            ["@babel/plugin-transform-destructuring", { "useBuiltIns": true }],
            ["@babel/plugin-transform-runtime", { "helpers": false, "regenerator": true }],
            "syntax-dynamic-import",
            'react-loadable/babel', 
            ['emotion', { autoLabel: isDev, hoist: isProd, sourceMap: isDev }]
          ],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name (_file) {
                return ifDev('[path][name].[ext]', '[hash].[ext]');
              }
            },
          }
        ]
      },
    ],
  },
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