import { Component, inject, OnInit } from '@angular/core';
import { Launch } from '../../types/launch';
import { LaunchService } from '../../services/launch.service';
import { ListComponent } from '../../components/list/list.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { LaunchFilterParams } from '../../types/launch-filter-params';
import { PageParams } from '../../types/page-params';
import { LaunchParams, queryParamsToLaunchParams } from '../../types/launch-params';
import { RequestStatus } from '../../types/request-status';
import { catchError, of, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-based',
  templateUrl: './service-based.component.html',
  imports: [ListComponent, FiltersComponent, PaginationComponent],
  standalone: true,
})
export default class ServiceBasedComponent implements OnInit {
  private launchService = inject(LaunchService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  params: LaunchParams = queryParamsToLaunchParams({});
  launches: Launch[] = [];
  status: RequestStatus = RequestStatus.idle;
  total: number = 0;

  ngOnInit() {
    this.getLaunches(queryParamsToLaunchParams(this.route.snapshot.queryParams));
  }

  filterLaunches(params: LaunchFilterParams) {
    this.navigate({...params, page: 1});
    this.getLaunches({...this.params, ...params, page: 1 });
  }

  pageLaunches(params: PageParams) {
    this.navigate(params);
    this.getLaunches({...this.params, ...params });
  }

  private getLaunches(params: LaunchParams) {
    this.params = params
    this.status = RequestStatus.loading;
    this.launchService
      .getLaunches(this.params).pipe(
        tap({
          next: () => this.status = RequestStatus.idle,
          error: () => this.status = RequestStatus.error,
        }),
        catchError(() => of({data: [], total: 0}))
      )
      .subscribe(({data, total}) => {
        this.launches = data;
        this.total = total;
      });
  }

  private navigate(queryParams: Record<string, any>) {
    this.router.navigate([], {queryParams, queryParamsHandling: 'merge'});
  }

}
