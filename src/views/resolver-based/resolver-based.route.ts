import { AppRoute } from '../../types/app-route';
import { launchResolvers } from './launch-resolvers';

export const resolverBasedRoute: AppRoute = {
  path: 'resolver',
  title: 'Resolver',
  resolve: launchResolvers,
  runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  loadComponent: () => import('./resolver-based.component'),
}
