import Koa from 'koa';
import Loadable from 'react-loadable';
import config from 'config';

import { rendererMiddleware } from './middlewares';

const log = require('debug')('renderer');

log('Starting renderer service...');

const { host, port } = config.get('renderer');

let app = new Koa();

app.use(async (ctx, next) => {
  log(JSON.stringify(ctx.request));

  await next();
});

app.use(rendererMiddleware);

Loadable.preloadAll().then(() => {
  if (__PROD__) {
    app.listen(port);
    log(`Renderer service is up and running at ${host}:${port}`);
  }
});

export default app;
