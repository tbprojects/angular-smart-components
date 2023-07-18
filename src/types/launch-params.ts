import { Params } from '@angular/router';
import { LaunchFilterParams, queryParamsToLaunchFilterParams } from './launch-filter-params';
import { PageParams, queryParamsToPageParams } from './page-params';

export type LaunchParams = LaunchFilterParams & PageParams;

export function queryParamsToLaunchParams(params: Params): LaunchParams {
  return {
    ...queryParamsToLaunchFilterParams(params),
    ...queryParamsToPageParams(params)
  }
}
