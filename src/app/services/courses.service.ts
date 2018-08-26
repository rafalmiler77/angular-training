import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Course, CourseClass } from 'app/entities/course.model';
import { Author2 } from 'app/entities/author2.model';

@Injectable()
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllAuthors(): Observable<Author2[]> {
    const url = `http://localhost:3004/authors`;
    return this.http.get<Author2[]>(url);
  }

  public getCourses(start: number = 0, count: number = 1): Observable<Course[]> {
    const url = `http://localhost:3004/courses?start=${start}&count=${count}`;
    return this.http.get<Course[]>(url);
  }

  public getCourse(courseId: number): Observable<Course[]> {
    const url = `http://localhost:3004/courses?id=${courseId}`;
    return this.http.get<Course[]>(url);
  }
  public searchInCourses(textFragment: string): Observable<Course[]> {
    const start = 0;
    const count = 5;
    const url = `http://localhost:3004/courses?start=${start}&count=${count}&textFragment=${textFragment}`;
    return this.http.get<Course[]>(url);
  }

  public createCourse({...props}): Observable<Course> {
    const newCourse = new CourseClass(props);
    const body = newCourse;
    const url = `http://localhost:3004/courses`;
    return this.http.post<Course>(url, body);
  }

  public updateCourse(course): Observable<Course> {
    const id = course.id;
    const body = course;
    const url = `http://localhost:3004/courses?id=${id}`;
    return this.http.put<Course>(url, body);
  }

  public removeCourse(courseId: number): Observable<Course[]> {
    const start = 0;
    const count = 5;
    const textFragment = '';
    const url = `http://localhost:3004/courses?start=${start}&count=${count}&textFragment=${textFragment}&id=${courseId}`;
    return this.http.delete<Course[]>(url);
  }

}
