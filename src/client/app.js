import React from 'react';
import { object } from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router-dom';
import Routes from './routes';
import ContextProvider from './context';

const App = ({ history }) => {
  return (
    <ContextProvider>
      <Router  history={history}>
        <Routes />
      </Router>
    </ContextProvider>
  );
};

App.propTypes = {
  history: object.isRequired,
};

export default hot(App);
