import Loadable from 'react-loadable';
import { LoaderFullscreen } from '../../components/Loader';

export const AboutView = Loadable({
  loader: () => import(/* webpackChunkName: "about-view" */ './View'),
  loading: LoaderFullscreen,
});
