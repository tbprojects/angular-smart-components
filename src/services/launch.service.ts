import { Injectable } from '@angular/core';
import { Observable, of, delay, map, tap } from 'rxjs';
import { LaunchMocks } from '../mocks/launch.mocks';
import { Launch } from '../types/launch';
import { ResponseData } from '../types/response-data';
import { LaunchParams } from '../types/launch-params';

@Injectable({providedIn: 'root'})
export class LaunchService {
  private requestCounter: number = 0;

  getLaunches(params: LaunchParams): Observable<ResponseData<Launch>> {
    return of(LaunchMocks).pipe(
      tap(() => console.log(`#${++this.requestCounter} loading launches`, params)),
      map(launches => {
        // simulate error
        if (params.mission === 'error') {
          throw new Error('get launches failed');
        }

        // filtering
        const filteredLaunches = launches.filter(launch =>
          (!params.mission || launch.missionName.toLowerCase().includes(params.mission.trim().toLowerCase())) &&
          (!params.year || new Date(launch.launchDate).getFullYear() === params.year) &&
          (!params.successfulOnly || launch.success)
        );

        // pagination
        const total = filteredLaunches.length;
        const start = (params.page - 1) * params.size;
        const end = params.page * params.size;
        const data = filteredLaunches.slice(start, end);

        return {data, total};
      }),
      delay(500),
    );
  }
}
