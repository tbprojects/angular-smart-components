import { Params } from '@angular/router';

export interface LaunchFilterParams {
  mission: string;
  year: number | null;
  successfulOnly: boolean;
}

export const defaultLaunchFilterParams: Readonly<LaunchFilterParams> = {
  mission: '',
  year: null,
  successfulOnly: false
}

export function queryParamsToLaunchFilterParams(params: Params) {
  return {
    mission: params['mission'] ? params['mission'] : defaultLaunchFilterParams.mission,
    year: params['year'] ? +params['year'] : defaultLaunchFilterParams.year,
    successfulOnly: params['successfulOnly'] ? params['successfulOnly'] === 'true' : defaultLaunchFilterParams.successfulOnly,
  }
}
