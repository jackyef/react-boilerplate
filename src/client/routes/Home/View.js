import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeImage from './assets/home-icon.svg';

import { HomeContainer } from './styles';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div>
          This is Home.js
          <img src={homeImage} />
          <div>
            <Link to={'/about'}>Go to about</Link>
          </div>
        </div>
      </HomeContainer>
    )
  }
}

export default Home;