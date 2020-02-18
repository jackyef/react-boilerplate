import React from 'react';
import fetch from 'node-fetch';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import { renderStylesToString } from 'emotion-server';
import { StaticRouter } from 'react-router-dom';
import { renderToStringWithData } from '@apollo/react-ssr';
import { ApolloProvider } from '@apollo/react-common';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

import ContextProvider from '../../client/context';
import Routes from '../../client/routes';

const { GRAPHQL_PROXY_ENABLE, GRAPHQL_URI } = process.env;
const statsFile = path.resolve('./dist/client/loadable-stats.json');

const renderer = async (ctx, _next) => {
	console.log('Incoming request for url', ctx.url);

	const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
			uri: __DEV__ ? GRAPHQL_PROXY_ENABLE ? 'http://localhost:5555/graphql' : GRAPHQL_URI : GRAPHQL_URI,
      credentials: 'include',
			fetch,
    }),
    cache: new InMemoryCache(),
  });

  const extractor = new ChunkExtractor({ statsFile });
  const routerContext = {};
  const app = extractor.collectChunks(
    <ContextProvider>
      <ApolloProvider client={client}>
        <StaticRouter location={ctx.url} context={routerContext}>
          <Routes />
        </StaticRouter>
      </ApolloProvider>
    </ContextProvider>
  );
	const appData = await renderToStringWithData(app);

  ctx.body = `
    <html>
      <head>
        ${extractor.getLinkTags({ crossorigin: 'anonymous' })}
      </head>
      <body>
        <div id="root">${renderStylesToString(appData)}</div>
				<script>window.__APOLLO_STATE__ = ${JSON.stringify(client.extract())}</script>
				<script>window.__GRAPHQL_URI__ = "${GRAPHQL_URI}";window.__GRAPHQL_PROXY_ENABLE__ = ${GRAPHQL_PROXY_ENABLE};</script>
        ${extractor.getScriptTags({ crossorigin: 'anonymous' })}
      </body>
    </html>
  `;
}

export default renderer;
