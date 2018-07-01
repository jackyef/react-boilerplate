import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './app';
import createReduxStore from './redux';

const history = createBrowserHistory();
const store = createReduxStore(history);

ReactDOM.render(<App history={history} store={store} />, document.getElementById('root'));
