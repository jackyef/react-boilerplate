import React from 'react';
import { createBrowserHistory } from 'history';

import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

import App from '../app';

const history = createBrowserHistory();

describe('App', () => {
	afterEach(cleanup);

  test('should match snapshot', () => {
    const { container } = render(<App history={history}/>);

    expect(container).toBeInTheDocument();
  });
});
