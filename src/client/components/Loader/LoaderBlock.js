import React from 'react';
import { string } from 'prop-types';
import { LoaderContainer } from './styles';

const LoaderBlock = ({ color }) => {
  return (
    <LoaderContainer color={color} block>
      <div />
    </LoaderContainer>
  )
};

LoaderBlock.propTypes = {
  color: string,
};

LoaderBlock.defaultProps = {
  color: '#e7a7f3',
};

export default LoaderBlock;