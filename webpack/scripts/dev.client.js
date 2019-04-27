const webpack = require('webpack');
const WDS = require('webpack-dev-server');

const webpackConfig = require('../serve.config');

const main = DIR => {
  const { devServer } = webpackConfig;

  const compiler = webpack(webpackConfig);
  const { host, port } = devServer;

  compiler.plugin('done', () => {
    console.log(`${DIR} is ready and running on http://${host}:${port}`);
  });

  const server = new WDS(compiler, devServer);

  server.listen(port, host);
};

main('client');
