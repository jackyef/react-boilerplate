import React from 'react';
import { renderToString } from 'react-dom/server';
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
  });

  afterAll(() => {
    jest.unmock('@loadable/server');
  });
};
