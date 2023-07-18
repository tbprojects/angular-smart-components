import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ResponseData } from '../../types/response-data';
import { Launch } from '../../types/launch';
import { LaunchFilterParams } from '../../types/launch-filter-params';
import { PageParams } from '../../types/page-params';
import { LaunchParams } from '../../types/launch-params';

export const launchesActions = createActionGroup({
  source: 'Launches',
  events: {
    load: props<{ params: LaunchParams }>(),
    loadSuccess: props<{ responseData: ResponseData<Launch> }>(),
    loadError: emptyProps(),
    filter: props<{params: LaunchFilterParams}>(),
    page: props<{params: PageParams}>(),
  }
})
