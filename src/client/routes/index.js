import React from 'react';
import { Route, Switch } from 'react-router';

import { AboutView } from './About';
import { HomeView } from './Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/about" component={AboutView} />
    </Switch>
  );
};

export default Routes;
