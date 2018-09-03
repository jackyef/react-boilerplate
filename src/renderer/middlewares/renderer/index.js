import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import createReduxStore from '../../../../src/client/redux';
import Routes from '../../../../src/client/routes';
import { header, footer } from './templates';

const renderer = async (ctx, next)  => {
  const store = createReduxStore();
  const routerContext = {};
  const app = renderStylesToString(renderToString(
    <Provider store={store}>
      <StaticRouter url={ctx.url} context={routerContext}>
        <Routes />
      </StaticRouter>
    </Provider>
  ));

  ctx.body = `${header}${app}${footer}`;

  await next();
}

export default renderer;