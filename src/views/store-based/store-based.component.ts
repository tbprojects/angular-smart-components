import { Component, inject } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { LaunchFilterParams } from '../../types/launch-filter-params';
import { PageParams } from '../../types/page-params';
import { Store } from '@ngrx/store';
import { launchesFeature } from './store-based.store';
import { launchesActions } from './store-based.actions';

@Component({
  selector: 'app-store-based',
  standalone: true,
  imports: [ListComponent, FiltersComponent, PaginationComponent],
  templateUrl: './store-based.component.html'
})
export class StoreBasedComponent {
  private store = inject(Store);
  params = this.store.selectSignal(launchesFeature.selectParams);
  launches = this.store.selectSignal(launchesFeature.selectAll);
  status = this.store.selectSignal(launchesFeature.selectStatus);
  total = this.store.selectSignal(launchesFeature.selectDataTotal);

  filterLaunches(params: LaunchFilterParams) {
    this.store.dispatch(launchesActions.filter({params}));
  }

  pageLaunches(params: PageParams) {
    this.store.dispatch(launchesActions.page({params}));
  }
}
