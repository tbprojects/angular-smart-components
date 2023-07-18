import { Component, inject, Input } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { LaunchFilterParams } from '../../types/launch-filter-params';
import { PageParams } from '../../types/page-params';
import { Launch } from '../../types/launch';
import { ResponseData } from '../../types/response-data';
import { Router } from '@angular/router';
import { LaunchParams, queryParamsToLaunchParams } from '../../types/launch-params';
import { RequestStatus } from '../../types/request-status';

@Component({
  selector: 'app-resolver-based',
  standalone: true,
  imports: [ListComponent, FiltersComponent, PaginationComponent],
  templateUrl: './resolver-based.component.html'
})
export default class ResolverBasedComponent {
  private router = inject(Router);
  @Input() params: LaunchParams = queryParamsToLaunchParams({});
  @Input() set launchesData({data, total}: ResponseData<Launch>) {
    this.launches = data;
    this.total = total;
  };
  launches: Launch[] = [];
  status = RequestStatus.idle;
  total: number = 0;

  filterLaunches(params: LaunchFilterParams) {
    this.navigate({...params, page: 1 });
  }

  pageLaunches(params: PageParams) {
    this.navigate({...params});
  }

  private navigate(queryParams: Record<string, any>) {
    this.status = RequestStatus.loading;
    this.router.navigate([], {queryParams, queryParamsHandling: 'merge'})
      .then(() => this.status = RequestStatus.idle)
      .catch(() => {
        this.status = RequestStatus.error;
        this.launches = [];
        this.total = 0;
      })
  }
}
