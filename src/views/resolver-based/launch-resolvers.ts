import { ActivatedRouteSnapshot } from '@angular/router';
import { Launch } from '../../types/launch';
import { ResponseData } from '../../types/response-data';
import { inject } from '@angular/core';
import { LaunchService } from '../../services/launch.service';
import { Observable } from 'rxjs';
import { LaunchParams, queryParamsToLaunchParams } from '../../types/launch-params';

const params: (route: ActivatedRouteSnapshot) => LaunchParams = ({queryParams}) =>
  queryParamsToLaunchParams(queryParams);

const launchesData: (route: ActivatedRouteSnapshot) => Observable<ResponseData<Launch>> = (route) =>
  inject(LaunchService).getLaunches(params(route))

export const launchResolvers = {
  params,
  launchesData
}
