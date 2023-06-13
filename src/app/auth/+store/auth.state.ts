import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store"
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  isLoggedIn: boolean;
}

export const initState: AuthState = {
  isLoggedIn: false
}

export const reducer = createReducer(
  initState,
  on(AuthActions.loginSuccess, (state) => ({...state, isLoggedIn: true}))
);

export const selector = createFeatureSelector<AuthState>('auth');

export const isLoggedInSelector = createSelector(selector, state => state.isLoggedIn)
