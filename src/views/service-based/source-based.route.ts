import { AppRoute } from '../../types/app-route';

export const sourceBasedRoute: AppRoute = {
  path: 'service',
  title: 'Service',
  loadComponent: () => import('./service-based.component'),
}
