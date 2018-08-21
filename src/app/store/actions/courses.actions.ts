import { Action } from '@ngrx/store';
import { Course } from 'app/entities/course.model';

export enum CoursesActionTypes {
  GET_COURSES = '[Courses] Get Courses',
  ADD_COURSE = '[Courses] Add Courses',
  EDIT_COURSE = '[Courses] Edit Courses',
  DELETE_COURSE = '[Courses] Delete Courses',
  LOAD_MORE_COURSES = '[Courses] Load More Courses',
}

export class GetCourses implements Action {
  public type: string = CoursesActionTypes.GET_COURSES;
  constructor(public payload: Course[]) {}
}
export class AddCourse implements Action {
  readonly type = CoursesActionTypes.ADD_COURSE;
  constructor(public payload: Course) {}
}
export class EditCourse implements Action {
  readonly type = CoursesActionTypes.EDIT_COURSE;
  constructor(public payload: Course) {}
}
export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE;
  constructor(public payload: any) {}
}
export class LoadMoreCourses implements Action {
  readonly type = CoursesActionTypes.LOAD_MORE_COURSES;
  constructor(public payload: Course[]) {}
}

export type AllCoursesActions =
  | GetCourses
  | AddCourse
  | EditCourse
  | DeleteCourse
  | LoadMoreCourses;
