import React from 'react';
import { string } from 'prop-types';
import { LoaderContainer } from './styles';

const LoaderInline = ({ color }) => {
  return (
    <LoaderContainer color={color} inline>
      <div />
    </LoaderContainer>
  )
};

LoaderInline.propTypes = {
  color: string,
};

LoaderInline.defaultProps = {
  color: '#e7a7f3',
};

export default LoaderInline;