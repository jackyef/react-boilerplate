import Koa from 'koa';
import compress from 'koa-compress';

import rendererMiddleware from './middlewares/renderer';

require('dotenv').config();

const { PORT, GRAPHQL_PROXY_ENABLE, GRAPHQL_URI } = process.env;

const app = new Koa();

if (__DEV__) {
	const proxy = require('koa-proxies');

  if (GRAPHQL_PROXY_ENABLE) {
    app.use(
      proxy('/graphql', {
        target: GRAPHQL_URI,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/graphql(\/|\/\w+)?$/, ''),
        logs: true,
      }),
    );
  }
}

app.use(compress());

app.use(rendererMiddleware);

if (__PROD__) {
  app.listen(PORT, () => {
    console.log('Server is listening on port', PORT)
  })
}

export default app;
