import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Home from './routes/Home/View';

class App extends Component {
  render() {
    return (
      <div>
        This is app.js
        <Home />
      </div>
    )
  }
}

export default hot(module)(App);