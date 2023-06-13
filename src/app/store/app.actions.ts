import {createAction, props} from '@ngrx/store';
import {RegisterUser} from '../auth/auth.model';

export const login = createAction('[Auth] Login', props<{user: string}>())
export const loginSuccess = createAction('[Auth] Login Success', props<{user: string}>())

export const register = createAction('[Auth] Register', props<RegisterUser>())

export const registerSuccess = createAction('[Auth] Register Success', props<RegisterUser>())
