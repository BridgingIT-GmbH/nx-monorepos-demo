import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import * as AuthActions from './auth.actions';
import { map } from 'rxjs';

export const login = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(AuthActions.login),
      map(({ user }) => {
        return AuthActions.loginSuccess({ userId: 1, user });
      })
    );
  },
  { functional: true }
);
