import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as AppState from '../store/app.state';

export const appFeatureKey = 'app';

export interface State {
  app: AppState.AppState
}

export const reducers: ActionReducerMap<State> = {
  app: AppState.reducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
