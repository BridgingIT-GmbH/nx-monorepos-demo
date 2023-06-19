import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {select, State} from '@ngrx/store';
import {AuthState, isLoggedInSelector} from '../../auth';
import {map} from 'rxjs';

export const profileGuard: CanActivateFn = () => {
  const router = inject(Router);

  return inject(State<AuthState>).pipe(select(isLoggedInSelector), map((value) => {
    console.log(value)
    return !value ? router.createUrlTree(['home']) : true;
  }));
};
