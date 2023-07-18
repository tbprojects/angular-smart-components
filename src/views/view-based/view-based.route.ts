import { AppRoute } from '../../types/app-route';

export const viewBasedRoute: AppRoute = {
  path: 'view',
  title: 'Ultimate',
  loadComponent: () => import('./view-based.component'),
}
