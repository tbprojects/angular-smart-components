import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { launchesFeature } from './store-based.store';
import { StoreBasedComponent } from './store-based.component';
import { provideEffects } from '@ngrx/effects';
import * as launchesEffects from './store-based.effects';

export default <Routes>[
  {
    path: '',
    component: StoreBasedComponent,
    providers: [
      provideState(launchesFeature),
      provideEffects(launchesEffects)
    ]
  }
];
