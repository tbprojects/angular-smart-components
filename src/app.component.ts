import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Smart components</h1>

    <nav>
      <a routerLink="/service" routerLinkActive="active">
        Service + Subscribe
      </a>
      <a routerLink="/resolver" routerLinkActive="active">
        Resolver + Router Inputs
      </a>
      <a routerLink="/store" routerLinkActive="active">
        Store + RxJS
      </a>
      <a routerLink="/signals" routerLinkActive="active">
        Store + Signals
      </a>
    </nav>

    <router-outlet>
  `,
})
export class App {}