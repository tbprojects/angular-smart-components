import { inject, Injectable } from '@angular/core';
import { LaunchService } from '../../services/launch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, debounceTime, map, of, shareReplay, startWith, switchMap, tap } from 'rxjs';
import { LaunchFilterParams } from '../../types/launch-filter-params';
import { PageParams } from '../../types/page-params';
import { ResponseData } from '../../types/response-data';
import { Launch } from '../../types/launch';
import { LaunchParams, queryParamsToLaunchParams } from '../../types/launch-params';
import { RequestStatus } from '../../types/request-status';

@Injectable()
export class AsyncBasedService {
  private launchService = inject(LaunchService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  status = new BehaviorSubject<RequestStatus>(RequestStatus.idle);

  params: Observable<LaunchParams> = this.route.queryParams.pipe(
    map(queryParamsToLaunchParams),
  )

  launchesData: Observable<ResponseData<Launch>> = this.params.pipe(
    debounceTime(100),
    tap(() => this.status.next(RequestStatus.loading)),
    switchMap((params) =>
      this.launchService.getLaunches(params).pipe(
        tap({
          next: () => this.status.next(RequestStatus.idle),
          error: () => this.status.next(RequestStatus.error),
        }),
        catchError(() => of({data: [], total: 0}))
      )
    ),
    shareReplay(1),
  )

  launches: Observable<Launch[]> = this.launchesData.pipe(
    map(({data}) => data),
    startWith([]),
  )

  total: Observable<number> = this.launchesData.pipe(
    map(({total}) => total),
    startWith(0),
  )

  filterLaunches(params: LaunchFilterParams) {
    this.navigate({...params, page: 1});
  }

  pageLaunches(params: PageParams) {
    this.navigate({...params});
  }

  private navigate(queryParams: Record<string, any>) {
    this.router.navigate([], {queryParams, queryParamsHandling: 'merge'});
  }
}
