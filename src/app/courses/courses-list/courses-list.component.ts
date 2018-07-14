import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CoursesService } from 'app/services/courses.service';
import { Course } from 'app/entities/course.model';
import { FilterByPipe } from 'app/pipes';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnChanges {
  @Input()
  public searchTerm: string;

  public courses: Course[] = [];
  public allCourses: Course[] = [];

  constructor(
    private coursesService: CoursesService,
    private filterPipe: FilterByPipe
  ) { }

  ngOnInit() {
    this.getCoursesList();
  }
  ngOnChanges({searchTerm}: SimpleChanges) {
    const phrase = searchTerm.currentValue;
    if (phrase !== undefined) {
      this.courses = this.filterPipe.transform(this.allCourses, phrase);
    }
  }
  public getCoursesList() {
    this.courses = this.coursesService.getCourses();
    this.allCourses = this.courses.slice();
  }
  public edited(id: number) {
    console.log('clicked editing of course of id:', id);
  }
  public deleted(id: number) {
    this.coursesService.removeCourse(id);
    this.getCoursesList();
  }
  public loadMore() {
    console.log('clicked loading more');
  }

  public get more(): boolean {
    return this.courses.length > 0;
  }

}
