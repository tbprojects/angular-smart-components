import { Component, inject } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { LaunchFilterParams } from '../../types/launch-filter-params';
import { PageParams } from '../../types/page-params';
import { SignalBasedService } from './signal-based.service';

@Component({
  selector: 'app-signal-based',
  standalone: true,
  imports: [ListComponent, FiltersComponent, PaginationComponent],
  providers: [SignalBasedService],
  templateUrl: './signal-based.component.html'
})
export default class SignalBasedComponent {
  private service = inject(SignalBasedService);
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
