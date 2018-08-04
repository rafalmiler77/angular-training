import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { CoursesService } from './courses.service';
import { Course } from 'app/entities/course.model';

const coursesMock: Course[] = [
  {
    id: 1,
    name: 'Angular Course',
    date: new Date(2016, 8, 24),
    length: 60,
    isTopRated: true,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
     do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    id: 2,
    name: 'Python Course',
    date: new Date(2017, 3, 7),
    length: 40,
    isTopRated: false,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
  }
];

describe('CoursesService', () => {
  let injector: TestBed;
  let coursesService: CoursesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [CoursesService]
    });
    injector = getTestBed();
    coursesService = injector.get(CoursesService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));
  it('should get the data successful', () => {
    coursesService.getCourses(0, 5).subscribe((data: Course[]) => {
      expect(data[1].name).toBe('Python Course');
    });
    const httpRequest = httpMock.expectOne(`http://localhost:3004/courses?start=0&count=5`);
    expect(httpRequest.request.method).toBe('GET');
    httpRequest.flush(coursesMock);
  });
});
