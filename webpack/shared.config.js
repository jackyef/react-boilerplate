const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const babelConfig = require('./babel/babel.options');

const isServer = process.env.DIR === 'server';

module.exports = {
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [{
          test: /\.jsx?$/, // regex that matches the files that this loader should be handling
          exclude: /node_modules/,
          loaders: 'babel-loader',
          options: isServer ? babelConfig.server : babelConfig.client,
        }],
			},
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name (_file) {
                if (process.env.NODE_ENV === 'development') {
                  return '[name].[ext]';
                } else {
                  return '[contenthash].[ext]';
                }
              }
            },
          }
        ]
      },
    ],
  },

  plugins: [
    /**
     * Webpack progress plugin to see build progress
     */
		new SimpleProgressWebpackPlugin(),
		new LoadablePlugin(),
  ]
};
