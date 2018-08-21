import { combineReducers } from '@ngrx/store';
import { AuthState, authReducer } from './reducers/auth.reducer';
import { CoursesState, coursesReducer } from './reducers/courses.reducer';

export interface AppState {
  auth: AuthState;
  courses: CoursesState;
}

export const reducers: { [state: string]: (state: any, action: any) => any } = {
  auth: authReducer,
  courses: coursesReducer,
};

export function reducer(state: any, action: any) {
  const combinedReducers = combineReducers(reducers);
  return combinedReducers(state, action);
}
