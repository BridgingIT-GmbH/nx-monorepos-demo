import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.state';
import * as AppActions from '../store/app.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pl-8 flex flex-col">
      <div class="text-sky-700 pb-2 border-b-slate-200 border-b w-[275px] ">Willkommen zurück!</div>
      <div class="flex flex-row items-center gap-5 pt-6">
        <img class="w-16 h-16 rounded-full border-sky-700 border-2" src="/assets/greg.jpg" alt="bla"/>
        <div class="flex flex-col h-20">
          <div class="pb-3 text-sky-700 border-b-slate-200">Hallo Gregor, bist du das?</div>
          <div class="flex gap-2">
            <input placeholder="Passwort" class="rounded-lg p-2 text-xs h-8 border-sky-300 border bg-sky-100"
                   type="password"/>
            <button class="rounded-lg bg-sky-700 h-8 w-8 flex items-center justify-center" (click)="login()">
              <img src="/assets/key.svg"></button>
          </div>
          <div class="self-end pt-5 text-slate-800 text-xs">Nicht du? <a class="text-sky-700 underline">Account
            wechseln</a></div>
        </div>
      </div>
    </div>`,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  store = inject(Store<AppState>);

  login() {
    this.store.dispatch(AppActions.login({user: 'Gregor'}));
  }
}
