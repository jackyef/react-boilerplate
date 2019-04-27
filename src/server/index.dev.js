import http from 'http';

import app from './index';

const debug = require('debug')('server');

let currentApp = app.callback();
const server = http.createServer(currentApp);
const { HOST, PORT } = process.env;

server.listen(PORT, err => {
  if (err) {
    debug(err);
  } else {
    debug(`Server running at http://${HOST}:${PORT} env:${process.env.NODE_ENV}`);
  }
});

if (module.hot) {
  module.hot.accept('./index', () => {
    server.removeListener('request', currentApp);
    currentApp = app.callback();
    server.on('request', currentApp);
  });
}
