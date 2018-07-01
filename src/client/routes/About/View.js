import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AboutContainer } from './styles';
import { LoaderFullscreen } from '../../components/Loader';

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
        <LoaderFullscreen />
      </AboutContainer>
    )
  }
}

export default About;