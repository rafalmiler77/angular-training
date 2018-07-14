import { Injectable } from '@angular/core';
import { Course, CourseClass } from 'app/entities/course.model';
import { getPastDate, getFutureDate } from 'app/helpers/helpers';
@Injectable()
export class CoursesService {
public courses: Course[] = [
  {
    id: 1,
    title: 'Learn Javascript',
    creationDate: new Date(2016, 7, 4),
    duration: 60,
    topRated: false,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
     do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    id: 2,
    title: 'Java Ninja',
    creationDate: getPastDate(1),
    duration: 40,
    topRated: false,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
  },
  {
    id: 3,
    title: 'Python Course',
    creationDate: getFutureDate(400),
    duration: 90,
    topRated: false,
    description: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
     quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
  },
  {
    id: 4,
    title: 'Bash Hero',
    creationDate: new Date(2017, 8, 5),
    duration: 240,
    topRated: true,
    description: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
     eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
  },
  {
    id: 5,
    title: 'Angular Course',
    creationDate: new Date(2017, 3, 15),
    duration: 180,
    topRated: false,
    description: ` Duis aute irure dolor
     in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
];
  constructor() { }

  public getCourses(): Course[] {
    return this.courses;
  }

  public getCourse(courseId: number): Course {
    return this.courses.find((course) => course.id === courseId);
  }

  public createCourse({...props}): void {
    props.id = this.createNewId();
    const newCourse = new CourseClass(props);
    this.courses = [...this.courses, newCourse];
  }

  public updateCourse({id, ...props}): void {
    const currentCourse = this.getCourse(id);
    Object.keys(props).map(prop => {
      if (currentCourse.hasOwnProperty(prop) ) {
        currentCourse[prop] = props[prop];
      }
    });
  }

  public removeCourse(courseId): void {
    this.courses = this.courses.filter((course) => course.id !== courseId);
  }

  private createNewId(): number {
    const highestId = Math.max(...this.courses.map(item => item.id));
    return highestId + 1;
  }

}
