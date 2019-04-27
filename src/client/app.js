import React from 'react';
import { object } from 'prop-types';
import { hot } from 'react-hot-loader/root';
import RouterProvider from './routes';
import ContextProvider from './context';

const App = ({ history }) => {
  return (
    <ContextProvider>
      <RouterProvider history={history} />
    </ContextProvider>
  );
};

App.propTypes = {
  history: object.isRequired,
};

export default hot(App);
