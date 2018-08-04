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

  public name = '';
  public description = '';
  public length = '';
  public authors = '';

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  public handleSubmitClick(): void {
    const date = this.dateInputComponent.dateObj;

    this.coursesService.createCourse({
      name: this.name,
      description: this.description,
      date,
      length: this.length
    }).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/courses']);
    });
  }
  public durationChanged(value): void {
    this.length = value;
  }
  public handleCancelClick() {
    console.log('handleCancelClick');
    this.router.navigate(['/courses']);
  }

}
