import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AboutView } from './About';
import { HomeView } from './Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomeView />} />
      <Route path="/about" render={() => <AboutView />} />
    </Switch>
  );
};

export default Routes;
