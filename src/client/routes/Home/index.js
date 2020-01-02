import React from 'react';
import loadable from '@loadable/component';
import { LoaderFullscreen } from '../../components/Loader';

export const HomeView = loadable(() => import(/* webpackChunkName: "home-view" */ './View'), {
  fallback: <LoaderFullscreen />,
});
