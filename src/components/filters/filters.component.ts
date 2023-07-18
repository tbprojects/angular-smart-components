import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { defaultLaunchFilterParams, LaunchFilterParams } from '../../types/launch-filter-params';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { RequestStatus } from '../../types/request-status';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  RequestStatus = RequestStatus;
  @Output() filter = new EventEmitter<LaunchFilterParams>();
  @Input() status: RequestStatus = RequestStatus.idle;
  @Input({required: true}) set params(value: LaunchFilterParams) {
    this.form.patchValue(value);
  }

  title = inject(Title);
  sourcePath = `/${inject(DOCUMENT).location.pathname}-sources`;

  form = new FormGroup({
    mission: new FormControl<string>(defaultLaunchFilterParams.mission, {nonNullable: true}),
    year: new FormControl<number | null>(defaultLaunchFilterParams.year),
    successfulOnly: new FormControl<boolean>(defaultLaunchFilterParams.successfulOnly, {nonNullable: true}),
  })

  submit() {
    this.filter.emit(this.form.getRawValue());
  }

  reset() {
    this.form.reset();
    this.submit();
  }
}
