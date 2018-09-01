import Koa from 'koa';
import Loadable from 'react-loadable';
import config from 'config';

import { rendererMiddleware, logRandomNumberMiddleware } from './middlewares';

const log = require('debug')('renderer');

log('Starting renderer service...');

const { host, port } = config.get('renderer');

let app = new Koa();

app.use(async (ctx, next) => {
  log(JSON.stringify(ctx.request));
  log(JSON.stringify(ctx));
  ctx.body = 'hello world asaasdasdsdqwe';

  await next();

  ctx.body += 'this should be at end of body';
});

app.use(logRandomNumberMiddleware);
app.use(rendererMiddleware);

Loadable.preloadAll().then(() => {
  if (__PROD__) {
    app.listen(port);
    log(`Renderer service is up and running at ${host}:${port}`);
  }
});

export default app;
