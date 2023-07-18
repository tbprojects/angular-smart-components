import { Component, inject, OnInit } from '@angular/core';
import { Launch } from '../../types/launch';
import { LaunchService } from '../../services/launch.service';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-service-based',
  templateUrl: './service-based.component.html',
  styleUrls: ['./service-based.component.css'],
  imports: [ListComponent],
  standalone: true,
})
export default class ServiceBasedComponent implements OnInit {
  private launchService = inject(LaunchService);
  launches: Launch[] = [];

  ngOnInit() {
    this.launchService
      .getLaunches()
      .subscribe((launches) => (this.launches = launches));
  }
}
