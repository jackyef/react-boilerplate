import React from 'react';
import { string } from 'prop-types';
import { LoaderContainer } from './styles';

const LoaderFullscreen = ({ color }) => {
  return (
    <LoaderContainer color={color} fullscreen>
      <div />
    </LoaderContainer>
  )
};

LoaderFullscreen.propTypes = {
  color: string,
};

LoaderFullscreen.defaultProps = {
  color: '#e7a7f3',
};

export default LoaderFullscreen;