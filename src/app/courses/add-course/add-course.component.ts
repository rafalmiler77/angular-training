import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DateInputComponent } from 'app/courses/add-course/date-input/date-input.component';
import { CoursesService } from 'app/services/courses.service';
import { Author2 } from 'app/entities/author2.model';
import { Author } from 'app/entities/course.model';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  @ViewChild(DateInputComponent)
  private dateInputComponent: DateInputComponent;

  public name = new FormControl('', [Validators.maxLength(50)]);
  public description = new FormControl('', [Validators.maxLength(500)]);
  public length = 0;
  public authors: Author[] = [];
  public allAuthors: Author2[] = [];
  public subscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  public ngOnInit() {
    this.subscription = this.coursesService.getAllAuthors()
      .first().subscribe((authors: Author2[]) => {
        this.allAuthors = authors.sort();
      });
  }

  public handleSubmitClick(): void {
    const date = this.dateInputComponent.dateObj;

    this.coursesService.createCourse({
      name: this.name.value,
      description: this.description.value,
      date,
      length: this.length,
      authors: this.authors
    }).subscribe((res) => {
      this.router.navigate(['/courses']);
    });
  }
  public durationChanged(value): void {
    this.length = +value;
  }
  public authorsChanged(newAuthors): void {
    this.authors = newAuthors;
  }
  public handleCancelClick() {
    this.router.navigate(['/courses']);
  }

}
