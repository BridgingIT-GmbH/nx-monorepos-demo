import { createAction, props } from '@ngrx/store';
import { RegisterUser } from '../auth.model';

export const login = createAction('[Auth] Login', props<{ user: string }>());
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ userId: number; user: string }>()
);
export const loginFailed = createAction(
  '[Auth] Login Failed',
  props<{ error: string }>()
);

export const register = createAction('[Auth] Register', props<RegisterUser>());
