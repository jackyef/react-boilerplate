import React from 'react';
import { renderToString } from 'react-dom/server';
import { MockedProvider } from '@apollo/react-testing';
import serverMocks from './serverMocks';

export default () => {
  serverMocks();

  beforeAll(() => {
    jest.doMock('@loadable/server', () => ({
      ChunkExtractor: () => ({
        collectChunks: componentTree => componentTree,
        getLinkTags: () => '<link />',
        getStyleTags: () => '<style />',
        getScriptTags: () => '<style />',
      }),
		}));

    jest.doMock('@apollo/react-common', () => {
      const actualApolloCommon = jest.requireActual('@apollo/react-common');

      return {
        ...actualApolloCommon,
        ApolloProvider: MockedProvider,
      };
		});

    jest.doMock('@apollo/react-ssr', () => ({
      renderToStringWithData: renderToString,
    }));

  });

  afterAll(() => {
    jest.unmock('@loadable/server');
    jest.unmock('@apollo/react-common');
    jest.unmock('@apollo/react-ssr');
  });
};
