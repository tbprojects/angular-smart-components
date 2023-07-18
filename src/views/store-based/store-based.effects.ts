import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LaunchService } from '../../services/launch.service';
import { launchesActions } from './store-based.actions';
import { catchError, filter, map, of, switchMap, take, tap } from 'rxjs';
import { Router } from '@angular/router';
import { launchesFeature } from './store-based.store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';

export const handleParams = createEffect(
  (actions = inject(Actions), store = inject(Store)) =>
    actions.pipe(
      ofType(routerNavigatedAction),
      filter(({payload}) => payload.event.url.split('?')[0] === '/store'),
      switchMap(({payload}) =>
        store.pipe(select(launchesFeature.selectParams)).pipe(
          take(1),
          map(params => launchesActions.load({params}))
        )
      )
    )
  , {functional: true})

export const loadLaunches = createEffect(
  (actions = inject(Actions), store = inject(Store), service = inject(LaunchService)) =>
    actions.pipe(
      ofType(launchesActions.load),
      switchMap(({params}) =>
        service.getLaunches(params).pipe(
          map(responseData => launchesActions.loadSuccess({responseData})),
          catchError(() => of(launchesActions.loadError()))
        )
      )
    )
  , {functional: true});

export const filterLaunches = createEffect(
  (actions = inject(Actions), router = inject(Router)) => actions.pipe(
    ofType(launchesActions.filter),
    tap(({params}) => router.navigate([], {queryParams: {...params, page: 1}, queryParamsHandling: 'merge'}))
  )
  , {functional: true, dispatch: false}
);

export const pageLaunches = createEffect(
  (actions = inject(Actions), router = inject(Router)) => actions.pipe(
    ofType(launchesActions.page),
    tap(({params}) => router.navigate([], {queryParams: {...params}, queryParamsHandling: 'merge'}))
  )
  , {functional: true, dispatch: false}
);
