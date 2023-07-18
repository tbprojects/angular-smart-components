import { AppRoute } from '../../types/app-route';

export const storeBasedRoute: AppRoute =   {
  path: 'store',
  title: 'NgRx Store',
  loadChildren: () => import('./store-based.routes'),
}
