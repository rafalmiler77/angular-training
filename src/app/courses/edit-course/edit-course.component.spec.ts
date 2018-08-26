import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import { DurationPipe } from 'app/pipes';
import { CoursesService } from 'app/services/courses.service';
import { EditCourseComponent } from './edit-course.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Course } from 'app/entities/course.model';
import { coursesMock } from 'app/entities/coursesMock';
import { Author2 } from 'app/entities/author2.model';

class CoursesServiceMock {
  public getCourse(): Observable<Course[]> {
    return Observable.of(coursesMock.splice(1, coursesMock.length));
   }
  public updateCourse(): Observable<Course> {
    return Observable.of(coursesMock[1]);
   }
  public getAllAuthors(): Observable<Author2[]> {
    return Observable.of([]);
   }
}

class ActivatedRouteStub {
  public params = Observable.of({ id: '1' });
}
class StoreMock {
  public dispatch(_: any): void {
    return;
  }
  public subscribe(_: any): Observable<Course[]> {
    return Observable.of(coursesMock);
  }
}

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;

  const routerMock: Router = jasmine.createSpyObj('Router', ['navigate']);
  const locationMock: Location = jasmine.createSpyObj('Location', ['back']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCourseComponent, DurationPipe ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CoursesService, useClass: CoursesServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: Location, useValue: locationMock },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: Store, useClass: StoreMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    component.authorsInputComponent = jasmine.createSpy('isValid');
    component.durationInputComponent = jasmine.createSpy('isValid');
    fixture.detectChanges();
  });

  it('should create edit-course', () => {
    expect(component).toBeTruthy();
  });
});
