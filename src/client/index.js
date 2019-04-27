import React from 'react';
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';
import { createBrowserHistory } from 'history';

import App from './App';

const history = createBrowserHistory();

Loadable.preloadReady().then(() => {
  const container = document.getElementById('root');
  const bootstrap = window.isSSR ? hydrate : render;
  const props = {
    history,
  };

  bootstrap(<App {...props} />, container);
});
