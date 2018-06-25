import { createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducers from './reducers';
import initialState from './initialState';

export default history => {
  const middleware = routerMiddleware(history);

  const store = createStore(
    connectRouter(history)(reducers),
    initialState, // can hydrate initialState from server here, for SSR purposes.
    compose(
      applyMiddleware(middleware), // for allowing change location by store.dispatch
      // add other middleware here, if needed
    )
  );

  return store;
};
