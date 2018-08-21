import { AllCoursesActions, CoursesActionTypes } from './../actions/courses.actions';
import { Course } from 'app/entities/course.model';

export interface CoursesState {
  courses: Course[];
}

export const initialState: CoursesState = {
  courses: []
};

export function coursesReducer(state = initialState, action: AllCoursesActions): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.GET_COURSES: {
      return {
        ...state,
        courses: action.payload,
      };
    }
    case CoursesActionTypes.LOAD_MORE_COURSES: {
      return {
        ...state,
        courses: state.courses.concat(action.payload),
      };
    }

    default: {
      return state;
    }
  }
}

