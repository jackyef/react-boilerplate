module.exports = {
  rules: [
    {
      test: /\.jsx?$/, // regex that matches the files that this loader should be handling
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    },
  ],
};