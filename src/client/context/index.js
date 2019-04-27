import React from 'react';
import { node, object } from 'prop-types';

import GlobalProvider from './global';

function ContextProvider({ children, initialGlobalState }) {
  return <GlobalProvider initialState={initialGlobalState}>{children}</GlobalProvider>;
}

ContextProvider.propTypes = {
  children: node.isRequired,
  initialGlobalState: object,
};

ContextProvider.defaultProps = {
  initialGlobalState: undefined,
};

export default ContextProvider;
