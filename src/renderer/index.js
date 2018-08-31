import http from 'http';
import config from 'config';

import app from './server';

const log = require('debug')('dev:renderer');

log('Starting renderer service...');

const { host, port } = config.get('renderer');
let currentApp = app.callback();
const server = http.createServer(currentApp);

server.listen(port, err => {
  if (err) {
    log('Error when running dev server', err);
  } else {
    log(`Renderer service is up and running at ${host}:${port}`);
  }
});

if (module.hot) {
  log(`HMR enabled!`);
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    currentApp = app.callback();
    server.on('request', currentApp);
  });
}
