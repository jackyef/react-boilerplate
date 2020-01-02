import React from 'react';
import loadable from '@loadable/component';
import { LoaderFullscreen } from '../../components/Loader';

export const AboutView = loadable(() => import(/* webpackChunkName: "about-view" */ './View'), {
  fallback: <LoaderFullscreen />,
});
