import { AppRoute } from '../../types/app-route';

export const asyncBasedRoute: AppRoute =   {
  path: 'async',
  title: 'RxJs Async',
  loadComponent: () => import('./async-based.component'),
}
