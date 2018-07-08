import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { FilterByPipe } from 'app/pipes';
import { OrderByPipe } from 'app/pipes/order-by.pipe';
import { CoursesService } from 'app/services/courses.service';
import { coursesMock } from 'app/entities/coursesMock';
import { Course } from 'app/entities/course.model';

class CoursesServiceMock {
  public getCourses(): Course[] {
    return coursesMock;
  }
}

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, OrderByPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CoursesService, useClass: CoursesServiceMock },
        { provide: FilterByPipe }
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
