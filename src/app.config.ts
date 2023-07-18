import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    // Router setup
    provideRouter(routes, withComponentInputBinding()),

    // NgRx store setup
    provideStore({router: routerReducer}),
    provideRouterStore(),
    provideEffects(),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode()
    }),
  ]
};
