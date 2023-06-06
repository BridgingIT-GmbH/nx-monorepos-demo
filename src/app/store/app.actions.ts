import {createAction, props} from '@ngrx/store';

export const login = createAction('[Login] Login', props<{user: string}>())
export const loginSuccess = createAction('[Login] Login Success', props<{user: string}>())
export const loginFailed = createAction('[Login] Login Failed', props<{error: string}>())
