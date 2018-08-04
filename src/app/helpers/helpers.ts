import { Course } from 'app/entities/course.model';

export const getPastDate = (diff: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - diff);
  return date;
};
export const getFutureDate = (diff: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + diff);
  return date;
};
export const findCourse = (courses: Course[], courseId: number): Course => {
  return courses.find((course) => course.id === courseId);
};
