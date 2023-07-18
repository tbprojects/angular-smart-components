import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import { Launch } from '../../types/launch';
import { getRouterSelectors } from '@ngrx/router-store';
import { launchesActions } from './store-based.actions';
import { queryParamsToLaunchParams } from '../../types/launch-params';
import { RequestStatus } from '../../types/request-status';

export const adapter = createEntityAdapter<Launch>();

export const launchesFeature = createFeature({
  name: 'launches',
  reducer: createReducer(
    adapter.getInitialState({
      dataTotal: 0,
      status: RequestStatus.idle,
    }),
    on(launchesActions.load, (state) => ({...state, status: RequestStatus.loading})),
    on(launchesActions.loadSuccess, (state, {responseData}) => ({
      ...adapter.setAll(responseData.data, state),
      dataTotal: responseData.total,
      status: RequestStatus.idle,
    })),
    on(launchesActions.loadError, (state) => ({
      ...adapter.setAll([], state),
      dataTotal: 0,
      status: RequestStatus.error,
    })),
  ),
  extraSelectors: ({selectLaunchesState}) => {
    const { selectQueryParams } = getRouterSelectors();
     return {
       ...adapter.getSelectors(selectLaunchesState),
       selectParams: createSelector(selectQueryParams, (params) => queryParamsToLaunchParams(params)),
     }
  }
})
