import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../entities/course.model';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  @Input()
  public course: Course;

  @Output()
  public edited: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public deleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  public editCourse(): void {
    this.edited.emit(this.course.id);
  }
  public deleteCourse(): void {
    this.deleted.emit(this.course.id);
  }

}
