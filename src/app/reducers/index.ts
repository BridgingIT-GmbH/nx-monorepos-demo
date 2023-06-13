import {isDevMode} from '@angular/core';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as AuthState from '../auth/+store/auth.state';
import * as ChirpState from '../chirp/+store/chirp.state';
import {authFeatureKey} from '../auth/+store/auth.state';
import {chirpFeatureKey} from '../chirp/+store/chirp.state';

export const appFeatureKey = 'app';

export interface State {
  [authFeatureKey]: AuthState.AuthState
  [chirpFeatureKey]: ChirpState.ChirpState
}

export const reducers: ActionReducerMap<State> = {
  [authFeatureKey]: AuthState.reducer,
  [chirpFeatureKey]: ChirpState.reducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [debug] : [];
