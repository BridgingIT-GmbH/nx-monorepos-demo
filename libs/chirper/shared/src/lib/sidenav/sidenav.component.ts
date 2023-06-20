import { Component, inject, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <ul>
      <li
        *ngFor="let item of visibleItems"
        [ngClass]="{ 'font-bold': currentRoute === item.url }"
        class="text-lg leading-10"
      >
        <a [routerLink]="[item.url]">{{ item.label }}</a>
      </li>
    </ul>
  `,
})
export class SidenavComponent {
  @Input({ required: true })
  isLoggedIn!: Signal<boolean>;

  route = toSignal(inject(ActivatedRoute).url);

  navItems = [
    { label: 'Neueste Chirps', url: '/home', loggedin: false },
    { label: '# Trending', url: '/trends', loggedin: false },
    { label: 'Profil', url: '/profile', loggedin: true },
    { label: 'Einstellungen', url: '/settings', loggedin: true },
  ];

  get currentRoute() {
    const route = this.route();
    return route ? `/${route}` : '/';
  }

  get visibleItems() {
    return this.navItems.filter(
      ({ loggedin }) => !loggedin || loggedin === this.isLoggedIn()
    );
  }
}
