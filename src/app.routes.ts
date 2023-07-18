import { sourceBasedRoute } from './views/service-based/source-based.route';
import { AppRoute } from './types/app-route';
import { slidesRoute } from './views/slides/slides.route';
import { sourcesRoutes } from './views/sources/sources.routes';
import { resolverBasedRoute } from './views/resolver-based/resolver-based.route';
import { asyncBasedRoute } from './views/async-based/async-based.route';
import { signalBasedRoute } from './views/signal-based/signal-based.route';
import { storeBasedRoute } from './views/store-based/store-based.route';
import { viewBasedRoute } from './views/view-based/view-based.route';
import { recordingRoute } from './views/recording/recording.route';

const defaultRoute: AppRoute =  {
  path: '',
  pathMatch: 'full',
  skipMenu: true,
  redirectTo: 'slides',
};

export const routes: AppRoute[] = [
  defaultRoute,
  slidesRoute,
  recordingRoute,
  sourceBasedRoute,
  resolverBasedRoute,
  asyncBasedRoute,
  signalBasedRoute,
  storeBasedRoute,
  viewBasedRoute,
  ...sourcesRoutes,
];
