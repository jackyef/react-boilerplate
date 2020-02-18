import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import { AboutView } from './About';
import { HomeView } from './Home';

const Routes = () => {
  return (
		<Router>
			<HeaderNav />
			<Switch>
				<Route exact path="/" render={() => <HomeView />} />
				<Route path="/about" render={() => <AboutView />} />
			</Switch>
			<Footer />
		</Router>
  );
};

export default Routes;
