import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  isLoggedIn: boolean;
  userId?: number;
}

export const initState: AuthState = {
  isLoggedIn: false,
};

export const reducer = createReducer(
  initState,
  on(AuthActions.loginSuccess, (state, { userId }) => ({
    ...state,
    isLoggedIn: true,
    userId,
  }))
);

export const authReducer = reducer;

export const selector = createFeatureSelector<AuthState>('auth');

export const isLoggedInSelector = createSelector(
  selector,
  (state) => state.isLoggedIn
);
export const userIdSelector = createSelector(selector, (state) => state.userId);
