import Loadable from 'react-loadable';
import { LoaderFullscreen } from '../../components/Loader';

export const HomeView = Loadable({
  loader: () => import(/* webpackChunkName: "home-view" */ './View'),
  loading: LoaderFullscreen,
});
