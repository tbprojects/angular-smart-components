import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Launch } from '../../types/launch';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class ListComponent {
  @Input({ required: true }) launches: Launch[] = [];
}
