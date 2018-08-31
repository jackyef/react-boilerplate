const config = {
  __DEV__: true,
  __PROD__: false,
  env: process.env.NODE_ENV,
  loggerOptions: {
    prettyPrint: {
      colorize: true
    } 
  },
  renderer: {
    host: 'localhost',
    port: 50001,
    hmrPort: 50002,
  }
};

config.globals = {
  __DEV__: config.env === 'development',
  __TEST__: config.env === 'test',
  __PROD__: config.env === 'production',
};

module.exports = config;