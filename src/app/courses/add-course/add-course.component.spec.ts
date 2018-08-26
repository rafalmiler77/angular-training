import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';

import { AddCourseComponent } from './add-course.component';
import { CoursesService } from 'app/services/courses.service';
import { Author2 } from 'app/entities/author2.model';

class CoursesServiceMock {
  public createCourse() {
  }
  public getAllAuthors(): Observable<Author2[]> {
    return Observable.of([]);
   }
}

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  const routerMock: Router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: CoursesService, useClass: CoursesServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;

    component.name = new FormControl('');
    component.description = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
