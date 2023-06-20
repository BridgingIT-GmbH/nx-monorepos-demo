import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../index';

export const loadUserProfile = createAction(
  '[User] loadUserProfile',
  props<{ userId: number }>()
);
export const loadUserProfileSuccess = createAction(
  '[User] loadUserProfile success',
  props<{ userId: number; user: UserProfile }>()
);
