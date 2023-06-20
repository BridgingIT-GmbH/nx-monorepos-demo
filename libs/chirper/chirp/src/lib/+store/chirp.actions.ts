import { createAction, props } from '@ngrx/store';
import { Chirp } from '../chirp.model';

export const loadChirps = createAction(
  '[Chirps] loadChirps',
  props<{ userId?: number }>()
);
export const loadChirpsSuccess = createAction(
  '[Chirps] loadChirps success',
  props<{ userId: number | undefined; chirps: Chirp[] }>()
);

export const addChirp = createAction(
  '[Chirps] addChirp',
  props<{ chirp: Chirp }>()
);
