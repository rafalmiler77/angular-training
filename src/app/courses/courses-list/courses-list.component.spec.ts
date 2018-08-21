import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CoursesListComponent } from './courses-list.component';
import { OrderByPipe } from 'app/pipes';
import { CoursesService } from 'app/services/courses.service';
import { coursesMock } from 'app/entities/coursesMock';
import { Course } from 'app/entities/course.model';

class CoursesServiceMock {
  public getCourses(): Observable<Course[]> {
    return Observable.of(coursesMock);
  }
}
class StoreMock {
  public dispatch(_: any): void {
    return;
  }
  public subscribe(_: any): Observable<Course[]> {
    return Observable.of(coursesMock);
  }
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  const routerStub: Router = jasmine.createSpyObj('route', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, OrderByPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CoursesService, useClass: CoursesServiceMock },
        { provide: Router, useValue: routerStub },
        { provide: Store, useClass: StoreMock },
        { provide: OrderByPipe }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get courses', () => {
    component.ngOnInit();
    expect(component.courses).toBeDefined();
  });
});
