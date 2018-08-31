import Koa from 'koa';
// import logger from 'koa-pino-logger';
import config from 'config';
import Loadable from 'react-loadable';

// import logRandomNumber from './middlewares/logRandomNumber';

const log = require('debug')('renderer');

log('Starting renderer service...');

const { host, port } = config.get('renderer');

let app = new Koa();

// app.use(logger());

app.use(ctx => {
  log(ctx.request);
  ctx.body = 'hello world!';
});

// app.use(logRandomNumber);

Loadable.preloadAll().then(() => {
  if (__PROD__) {
    app.listen(port);
    log(`Renderer service is up and running at ${host}:${port}`);
  }
});

export default app;
