import { computed, effect, inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { LaunchService } from '../../services/launch.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchFilterParams } from '../../types/launch-filter-params';
import { PageParams } from '../../types/page-params';
import { ResponseData } from '../../types/response-data';
import { Launch } from '../../types/launch';
import { toSignal } from '@angular/core/rxjs-interop';
import { LaunchParams, queryParamsToLaunchParams } from '../../types/launch-params';
import { RequestStatus } from '../../types/request-status';
import { catchError, of, tap } from 'rxjs';

@Injectable()
export class SignalBasedService {
  private launchService = inject(LaunchService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  queryParams = toSignal(this.route.queryParams, {requireSync: true});

  status: WritableSignal<RequestStatus> = signal(RequestStatus.idle);

  params: Signal<LaunchParams> = computed(() => queryParamsToLaunchParams(this.queryParams()));

  launchesData: WritableSignal<ResponseData<Launch>> = signal({data: [], total: 0});

  launches: Signal<Launch[]> = computed(() => this.launchesData().data)

  total: Signal<number> = computed(() => this.launchesData().total)

  constructor() {
    effect(() => {
      this.status.set(RequestStatus.loading);
      this.launchService.getLaunches(this.params()).pipe(
          tap({
            next: () => this.status.set(RequestStatus.idle),
            error: () => this.status.set(RequestStatus.error),
          }),
          catchError(() => of({data: [], total: 0}))
        )
        .subscribe((launchesData) => this.launchesData.set(launchesData))
    }, {allowSignalWrites: true});
  }

  filterLaunches(params: LaunchFilterParams) {
    this.navigate({...params, page: 1 });
  }

  pageLaunches(params: PageParams) {
    this.navigate({...params});
  }

  private navigate(queryParams: Record<string, any>) {
    this.router.navigate([], {queryParams, queryParamsHandling: 'merge'});
  }
}
