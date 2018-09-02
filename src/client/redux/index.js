import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';
import initialState from './initialState';

export default () => {
  // const middleware = routerMiddleware(history); // no longed need to connect to redux

  const store = createStore(
    reducers,
    initialState, // can hydrate initialState from server here, for SSR purposes.
    // compose(
      // applyMiddleware(middleware), // for allowing change location by store.dispatch
      // add other middleware here, if needed
    // )
  );

  return store;
};
