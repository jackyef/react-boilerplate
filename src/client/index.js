import React from 'react';
import { hydrate, render } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { createBrowserHistory } from 'history';

import App from './app';

const history = createBrowserHistory();

const init = () => {
  const container = document.getElementById('root');
  const bootstrap = window.isSSR ? hydrate : render;
  const props = {
    history,
  };

  bootstrap(<App {...props} />, container);
}

if (!document.getElementById('content')?.hasChildNodes()) {
  // no need to wait for loadableReady when not SSR-ing
  init();
} else {
  loadableReady(init);
}
