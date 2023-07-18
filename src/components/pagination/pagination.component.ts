import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageParams } from '../../types/page-params';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnChanges {
  @Output() page = new EventEmitter<PageParams>;
  @Input({required: true}) params!: PageParams;
  @Input({required: true}) total!: number;
  pages: number[] = [];

  get isFirstPage() {
    return this.params.page === 1;
  };

  get isLastPage() {
    return this.params.page === this.pages.length
  }

  ngOnChanges() {
    const pageCount = Math.ceil(this.total / this.params.size);
    this.pages = Array.from({length: pageCount}, (_, i) => i + 1);
  }

  changePage(page: number) {
    this.page.emit({...this.params, page});
  }
}
