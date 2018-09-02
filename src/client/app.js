import React from 'react';
import { object } from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './routes';

const App = ({ history, store }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

App.propTypes = {
  history: object.isRequired,
  store: object.isRequired,
};

export default hot(module)(App);
