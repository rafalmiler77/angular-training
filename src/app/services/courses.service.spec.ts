import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  it('should create course', inject([CoursesService], (service: CoursesService) => {
    service.createCourse({
      title: 'title',
      description: 'description'
    });
    expect(service.courses.length).toBe(6);
  }));

  it('should update course', inject([CoursesService], (service: CoursesService) => {
    service.updateCourse({
      id: 1,
      title: 'title',
      description: 'description'
    });
    expect(service.courses[0].title).toBe('title');
  }));

});
