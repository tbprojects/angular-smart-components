import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app.component';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      {
        path: 'service',
        loadComponent: () =>
          import('./views/service-based/service-based.component'),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'service',
      },
    ]),
  ],
});
