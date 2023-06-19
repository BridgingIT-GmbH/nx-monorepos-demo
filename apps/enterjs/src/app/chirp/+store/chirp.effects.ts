import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as ChirpActions from './chirp.actions';
import * as AuthActions from '../../auth/+store/auth.actions';
import { map, switchMap } from 'rxjs';
import { ChirpService } from '../chirp.service';

@Injectable({
  providedIn: 'root',
})
export class ChirpEffects {
  loadChirps$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChirpActions.loadChirps),
      switchMap(({ userId }) => {
        return this.chirpService
          .getChirps(userId)
          .pipe(
            map((chirps) => ChirpActions.loadChirpsSuccess({ userId, chirps }))
          );
      })
    );
  });

  loadChirpsForUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      switchMap(({}) => {
        return this.chirpService
          .getChirps(1)
          .pipe(
            map((chirps) =>
              ChirpActions.loadChirpsSuccess({ userId: 1, chirps })
            )
          );
      })
    );
  });

  constructor(private actions$: Actions, private chirpService: ChirpService) {}
}
