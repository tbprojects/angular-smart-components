import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AsyncBasedService } from './async-based.service';
import { ListComponent } from '../../components/list/list.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { LaunchFilterParams } from '../../types/launch-filter-params';
import { PageParams } from '../../types/page-params';

@Component({
  selector: 'app-async-based',
  standalone: true,
  imports: [ListComponent, FiltersComponent, PaginationComponent, AsyncPipe, NgIf],
  providers: [AsyncBasedService],
  templateUrl: './async-based.component.html'
})
export default class AsyncBasedComponent {
  private service = inject(AsyncBasedService);
  params = this.service.params;
  launches = this.service.launches;
  status = this.service.status;
  total = this.service.total;

  filterLaunches(params: LaunchFilterParams) {
    this.service.filterLaunches(params);
  }

  pageLaunches(params: PageParams) {
    this.service.pageLaunches(params);
  }
}
