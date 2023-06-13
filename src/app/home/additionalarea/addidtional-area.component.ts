import {Component, inject, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../../auth/login/login.component';
import {Store} from '@ngrx/store';
import {AuthState, isLoggedInSelector} from '../../auth/+store/auth.state';

@Component({
  selector: 'app-additionalarea',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  template: `<ng-container *ngIf="!isLoggedIn()">
    <app-login></app-login>
  </ng-container>
  <ng-container *ngIf="isLoggedIn()">
    <input type="text" class="w-full rounded-lg p-2 text-xs h-8 border-sky-300 border bg-sky-100" placeholder="Search...">
  </ng-container>`,
  styleUrls: ['./addidtional-area.component.scss']
})
export class AddidtionalAreaComponent {
  isLoggedIn: Signal<boolean> = inject(Store<AuthState>).selectSignal(isLoggedInSelector);
}
