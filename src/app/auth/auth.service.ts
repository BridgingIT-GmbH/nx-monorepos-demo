import {inject, Injectable} from '@angular/core';
import {RegisterUser} from './auth.model';
import {Store} from '@ngrx/store';
import {AuthState} from './+store/auth.state';
import * as AuthActions from './+store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  store = inject(Store<AuthState>);

  register (user: RegisterUser) {
    this.store.dispatch(AuthActions.register(user));
  }
}
