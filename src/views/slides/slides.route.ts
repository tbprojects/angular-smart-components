import { AppRoute } from '../../types/app-route';

export const slidesRoute: AppRoute =   {
  path: 'slides',
  title: 'Slides',
  loadComponent: () => import('./slides.component')
};
