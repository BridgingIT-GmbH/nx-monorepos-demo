import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store"
import * as AppActions from './app.actions';

export interface AppState {
  isLoggedIn: boolean;
}

export const initState: AppState = {
  isLoggedIn: false
}

export const reducer = createReducer(
  initState,
  on(AppActions.loginSuccess, (state) => ({...state, isLoggedIn: true}))
);

export const selector = createFeatureSelector<AppState>('app');

export const isLoggedInSelector = createSelector(selector, state => state.isLoggedIn)
