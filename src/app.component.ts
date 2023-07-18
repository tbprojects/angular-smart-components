import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { angularInSpaceLogo } from './images/angular-in-space-logo';
import { githubLogo } from './images/github-logo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  routes = routes;
  angularInSpaceLogo = angularInSpaceLogo;
  githubLogo = githubLogo
}
