import { Component, ViewChild } from '@angular/core';
import { DateInputComponent } from 'app/courses/add-course/date-input/date-input.component';
import { CoursesService } from 'app/services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  @ViewChild(DateInputComponent)
  private dateInputComponent: DateInputComponent;

  public title = '';
  public description = '';
  public duration = '';
  public authors = '';

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  public handleSubmitClick(): void {
    const creationDate = this.dateInputComponent.dateObj;

    this.coursesService.createCourse({
      title: this.title,
      description: this.description,
      creationDate,
      duration: this.duration
    });
    this.router.navigate(['/courses']);
  }
  public durationChanged(value): void {
    this.duration = value;
  }
  public handleCancelClick() {
    console.log('handleCancelClick');
    this.router.navigate(['/courses']);
  }

}
