import { isDevMode } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authFeatureKey, authReducer, AuthState } from '../auth';
import { chirpFeatureKey, chirpReducer, ChirpState } from '../chirp';
import { profileFeatureKey, profileReducer, ProfileState } from '../profile';

export const appFeatureKey = 'app';

export interface State {
  [authFeatureKey]: AuthState;
  [chirpFeatureKey]: ChirpState;
  [profileFeatureKey]: ProfileState;
}

export const reducers: ActionReducerMap<State> = {
  [authFeatureKey]: authReducer,
  [chirpFeatureKey]: chirpReducer,
  [profileFeatureKey]: profileReducer,
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [debug] : [];
