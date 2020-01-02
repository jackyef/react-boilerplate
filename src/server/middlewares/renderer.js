import React from 'react';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { StaticRouter } from 'react-router-dom';

import ContextProvider from '../../client/context';
import Routes from '../../client/routes';

const statsFile = path.resolve('./dist/client/loadable-stats.json');

const renderer = async (ctx, _next) => {
  console.log('Incoming request for url', ctx.url);
  
  const extractor = new ChunkExtractor({ statsFile });
  const routerContext = {};
  const app = extractor.collectChunks(
    <ContextProvider>
      <StaticRouter location={ctx.url} context={routerContext}>
        <Routes />
      </StaticRouter>
    </ContextProvider>
  );

  ctx.body = `
    <html>
      <head>
        ${extractor.getLinkTags({ crossorigin: 'anonymous' })}
      </head>
      <body>
        <div id="root">${renderStylesToString(renderToString(app))}</div>
        ${extractor.getScriptTags({ crossorigin: 'anonymous' })}
      </body>
    </html>
  `;
}

export default renderer;
