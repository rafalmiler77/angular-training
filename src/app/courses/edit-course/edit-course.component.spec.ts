import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DurationPipe } from 'app/pipes';
import { CoursesService } from 'app/services/courses.service';
import { EditCourseComponent } from './edit-course.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Course } from 'app/entities/course.model';
import { coursesMock } from 'app/entities/coursesMock';

class CoursesServiceMock {
  public updateCourse() { }
  public getCourse(): Observable<Course> {
    return Observable.of(coursesMock[0]);
   }
}

class ActivatedRouteStub {
  public params = Observable.of({ id: '' });
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
        FormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CoursesService, useClass: CoursesServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: Location, useValue: locationMock },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create edit-course', () => {
    expect(component).toBeTruthy();
  });
});
