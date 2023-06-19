import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {profileSelector, ProfileState} from '../+store';
import {select, Store} from '@ngrx/store';
import {loadUserProfile} from '../+store/profile.actions';
import {filter} from 'rxjs';
import {UserProfile} from '../profile.model';

export const profileResolver: ResolveFn<UserProfile | undefined> = (route) => {
  const store = inject(Store<ProfileState>);
  let userId = route.params['id'];
  if (!userId) {
    userId = 1;
  }
  store.dispatch(loadUserProfile({userId}));
  return store.pipe(
    select(profileSelector(userId)),
    filter((value) => !!value),
  );
};
