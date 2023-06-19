import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {map, switchMap} from 'rxjs';
import {ProfileService} from '../profile.service';
import {loadUserProfile, loadUserProfileSuccess} from './profile.actions';

@Injectable({
  providedIn: 'root'
})
export class ProfileEffects {
  loadUserProfile$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadUserProfile),
        switchMap(({userId}) => {
          return this.profileService.getUserProfile(userId).pipe(
            map((userProfile) => loadUserProfileSuccess({userId: userProfile.id, user: userProfile}))
          );
        })
      );
    },
  );

  constructor(private actions$: Actions, private profileService: ProfileService) {
  }
}

