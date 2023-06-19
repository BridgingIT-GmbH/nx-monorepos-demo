import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store"
import * as ChirpActions from './profile.actions';
import {UserProfile} from '../index';

export const profileFeatureKey = 'profile';

export interface ProfileState {
  users: { [userId: number]: UserProfile };
}

export const initState: ProfileState = {
  users: {}
}

export const reducer = createReducer(
  initState,
  on(ChirpActions.loadUserProfileSuccess, (state, { user}) => {
    const users = {...state.users};
    users[user.id] = user;

    return ({...state, users})
  })
);

export const profileReducer = reducer;

export const selector = createFeatureSelector<ProfileState>(profileFeatureKey);

export const profileSelector = (userId: number | undefined) => createSelector(selector, (state) => {
  if(userId) {
    return state.users?.[userId]
  }
  return undefined;
})
