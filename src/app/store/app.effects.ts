import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import * as AppActions from './app.actions';
import {map} from 'rxjs';

export const login = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(AppActions.login),
      map(({user}) => {
        console.log(
          AppActions.login.type
        );
        return AppActions.loginSuccess({user})
      })
    );
  },
  {functional: true}
);
