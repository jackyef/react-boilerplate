import Koa from 'koa';
import compress from 'koa-compress';

import rendererMiddleware from './middlewares/renderer';

require('dotenv').config();

const { PORT } = process.env;

const app = new Koa();

app.use(compress());

app.use(rendererMiddleware);

if (__PROD__) {
  app.listen(PORT, () => {
    console.log('Server is listening on port', PORT)
  })
}

export default app;
