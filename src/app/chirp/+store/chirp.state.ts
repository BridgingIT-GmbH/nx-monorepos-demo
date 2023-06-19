import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store"
import * as ChirpActions from './chirp.actions';
import {Chirp} from '../chirp.model';

export const chirpFeatureKey = 'chirp';

export interface ChirpState {
  chirps: Chirp[];
}

export const initState: ChirpState = {
  chirps: []
}

export const reducer = createReducer(
  initState,
  on(ChirpActions.loadChirpsSuccess, (state, {chirps}) => ({...state, chirps})),
  on(ChirpActions.addChirp, (state, {chirp}) => {
    const chirps = [...state.chirps];
    chirps.unshift(chirp);
    return ({...state, chirps})
  })
);

export const chirpReducer = reducer;

export const selector = createFeatureSelector<ChirpState>('chirp');

export const chirpSelector = createSelector(selector, state => state.chirps)
