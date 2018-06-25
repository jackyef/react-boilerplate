import React from 'react';
import { object } from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import RouterProvider from './routes';

const App = ({ history, store }) => {
  return (
    <Provider store={store}>
      <RouterProvider history={history} />
    </Provider>
  );
};

App.propTypes = {
  history: object.isRequired,
  store: object.isRequired,
};

export default hot(module)(App);
