import React from 'react';
import { object } from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './routes';
import ContextProvider from './context';
import client from './apollo';

const App = ({ history }) => {
  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <Router  history={history}>
          <Routes />
        </Router>
      </ContextProvider>
    </ApolloProvider>
  );
};

App.propTypes = {
  history: object.isRequired,
};

export default hot(App);
