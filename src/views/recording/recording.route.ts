import { AppRoute } from '../../types/app-route';

export const recordingRoute: AppRoute =   {
  path: 'recording',
  title: 'Recording',
  loadComponent: () => import('./recording.component')
};
