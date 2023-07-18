import { AppRoute } from '../../types/app-route';

export const signalBasedRoute: AppRoute = {
  path: 'signals',
  title: 'Signals',
  loadComponent: () => import('./signal-based.component'),
}
