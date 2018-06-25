import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AboutContainer } from './styles';

class About extends Component {
  render() {
    return (
      <AboutContainer>
        This is About.js
        <Link to={'/'}>Go to home</Link>
      </AboutContainer>
    )
  }
}

export default About;