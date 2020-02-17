import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AboutContainer } from './styles';

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <div>
          This is About.js
          <div>
            <Link to={'/'}>Go to home</Link>
          </div>
        </div>
      </AboutContainer>
    )
  }
}

export default About;
