import { inject, Injectable } from '@angular/core';
import { RegisterUser } from './auth.model';
import { Store } from '@ngrx/store';
import { AuthActions, AuthState } from './+store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  store = inject(Store<AuthState>);

  register(user: RegisterUser) {
    this.store.dispatch(AuthActions.register(user));
  }
}
