import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ListComponent } from '../../components/list/list.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, merge, Observable, of, shareReplay, startWith, switchMap } from 'rxjs';
import { LaunchService } from '../../services/launch.service';
import { RequestStatus } from '../../types/request-status';
import { Launch } from '../../types/launch';
import { LaunchParams, queryParamsToLaunchParams } from '../../types/launch-params';

@Component({
  selector: 'app-view-based',
  standalone: true,
  imports: [ListComponent, FiltersComponent, PaginationComponent, NgIf, AsyncPipe],
  templateUrl: './view-based.component.html'
})
export default class ViewBasedComponent implements OnInit {
  @ViewChild(PaginationComponent, {static: true}) private paginator!: PaginationComponent;
  @ViewChild(FiltersComponent, {static: true}) private filters!: FiltersComponent;
  private launchService = inject(LaunchService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  state!: Observable<{
    params: LaunchParams;
    launches: Launch[];
    total: number;
    status: RequestStatus;
  }>;

  ngOnInit() {
    this.state = merge(
      of(true),
      this.filters.filter.pipe(
        switchMap((params) =>
          this.router.navigate([], {queryParams: {...params, page: 1}, queryParamsHandling: 'merge'})
        ),
      ),
      this.paginator.page.pipe(
        switchMap((params) =>
          this.router.navigate([], {queryParams: params, queryParamsHandling: 'merge'})
        ),
      )
    ).pipe(
      map(() => queryParamsToLaunchParams(this.route.snapshot.queryParams)),
      switchMap((params) =>
        this.launchService.getLaunches(params).pipe(
          map(({data, total}) => ({params, launches: data, total, status: RequestStatus.idle})),
          startWith({params, launches: [], total: 0, status: RequestStatus.loading}),
          catchError(() => of({params, launches: [], total: 0, status: RequestStatus.error}))
        )
      ),
      shareReplay(1)
    )
  }
}
