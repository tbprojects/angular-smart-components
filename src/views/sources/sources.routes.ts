import { AppRoute } from '../../types/app-route';
import { SOURCE_FILES } from '../../tokens/source';

export const sourcesRoutes: AppRoute[] = [
  {
    path: 'service-sources',
    title: 'Service - source',
    skipMenu: true,
    providers: [{
      provide: SOURCE_FILES,
      useValue: [
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/service-based/source-based.route.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/service-based/service-based.component.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/service-based/service-based.component.html'
      ]
    }],
    loadComponent: () => import('./sources.component')
  },
  {
    path: 'resolver-sources',
    title: 'Resolver - source',
    skipMenu: true,
    providers: [{
      provide: SOURCE_FILES,
      useValue: [
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/app.config.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/resolver-based/resolver-based.route.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/resolver-based/launch-resolvers.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/resolver-based/resolver-based.component.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/resolver-based/resolver-based.component.html',
      ]
    }],
    loadComponent: () => import('./sources.component')
  },
  {
    path: 'async-sources',
    title: 'RxJs Async - source',
    skipMenu: true,
    providers: [{
      provide: SOURCE_FILES,
      useValue: [
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/async-based/async-based.route.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/async-based/async-based.service.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/async-based/async-based.component.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/async-based/async-based.component.html',
      ]
    }],
    loadComponent: () => import('./sources.component')
  },
  {
    path: 'signals-sources',
    title: 'Signals - source',
    skipMenu: true,
    providers: [{
      provide: SOURCE_FILES,
      useValue: [
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/signal-based/signal-based.route.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/signal-based/signal-based.service.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/signal-based/signal-based.component.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/signal-based/signal-based.component.html',
      ]
    }],
    loadComponent: () => import('./sources.component')
  },
  {
    path: 'store-sources',
    title: 'Store - source',
    skipMenu: true,
    providers: [{
      provide: SOURCE_FILES,
      useValue: [
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/app.config.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/store-based/store-based.route.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/store-based/store-based.routes.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/store-based/store-based.actions.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/store-based/store-based.store.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/store-based/store-based.effects.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/store-based/store-based.component.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/store-based/store-based.component.html',
      ]
    }],
    loadComponent: () => import('./sources.component')
  },
  {
    path: 'view-sources',
    title: 'Ultimate - source',
    skipMenu: true,
    providers: [{
      provide: SOURCE_FILES,
      useValue: [
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/view-based/view-based.route.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/view-based/view-based.component.ts',
        'https://github.com/tbprojects/angular-smart-components/blob/main/src/views/view-based/view-based.component.html'
      ]
    }],
    loadComponent: () => import('./sources.component')
  },
]
