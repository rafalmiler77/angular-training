import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'app/services/courses.service';
import { Course } from 'app/entities/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public courses: Course[];

  constructor(
    private coursesService: CoursesService
  ) {
    console.log('constructor executed');
   }

  ngOnInit() {
    console.log('ngOnInit executed');
    this.courses = this.coursesService.getCourses();
  }
  public edited(id: number) {
    console.log('clicked editing of course of id:', id);
  }
  public deleted(id: number) {
    console.log('clicked deleting of course of id:', id);
  }
  public loadMore() {
    console.log('clicked loading more');
  }

}
