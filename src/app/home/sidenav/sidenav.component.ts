import {Component, inject, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from '@ngrx/store';
import {AuthState, isLoggedInSelector} from '../../auth/+store/auth.state';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <ul>
      <li *ngFor="let item of visibleItems" [ngClass]="{'font-bold': currentRoute === item.url }" class="text-lg leading-10"><a [routerLink]="[item.url]">{{item.label}}</a></li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  route = toSignal(inject(ActivatedRoute).url)

  navItems = [
    { label: 'Neueste Chirps', url: '/home', loggedin: false},
    { label: '# Trending', url: '/trends', loggedin: false},
    { label: 'Profil', url: '/profile', loggedin: true},
    { label: 'Einstellungen', url: '/settings', loggedin: true},
  ];

  get currentRoute () {
    const route = this.route();
    return (route)? `/${route}`: '/';
  }
  get visibleItems () {
    return this.navItems.filter(({loggedin}) => !loggedin || loggedin === this.isLoggedIn())
  }
  isLoggedIn: Signal<boolean> = inject(Store<AuthState>).selectSignal(isLoggedInSelector);
}
