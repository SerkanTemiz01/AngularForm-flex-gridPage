import { Action, createReducer, on } from '@ngrx/store';
import * as NavigationActions from './Navigate.action';

export interface AppState {
  navigation: string;
}

const initialState: AppState = {
  navigation: ''
};

const appReducer = createReducer(
  initialState,
  on(NavigationActions.navigateToFlex, state => ({ ...state, navigation: 'flex' })),
  on(NavigationActions.navigateToGrid, state => ({ ...state, navigation: 'grid' }))
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
