import {Component, inject, Signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState, isLoggedInSelector} from './store/app.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  store = inject(Store<AppState>);
  title = 'enterjs';
  isLoggedIn: Signal<boolean> = this.store.selectSignal(isLoggedInSelector);
}
