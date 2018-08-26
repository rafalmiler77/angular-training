import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store';
import { Subscription } from 'rxjs/Subscription';
import { CoursesService } from 'app/services/courses.service';
import { AuthorsInputComponent } from 'app/courses/add-course/authors-input/authors-input.component';
import { DurationInputComponent } from 'app/courses/add-course/duration-input/duration-input.component';
import { Course, Author } from 'app/entities/course.model';
import { Author2 } from 'app/entities/author2.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, OnDestroy {
  @ViewChild(AuthorsInputComponent) authorsInputComponent;
  @ViewChild(DurationInputComponent) durationInputComponent;

  public courseId: number;
  public course: Course;
  public name = new FormControl('', [Validators.maxLength(50)]);
  public description = new FormControl('', [Validators.maxLength(500)]);
  public date;
  public length = 0;
  public authors: Author[] = [];
  public allAuthors: Author2[] = [];
  public isValid = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private store: Store<AppState>,
    private router: Router,
    private location: Location
  ) { }

  public ngOnInit() {
    this.getAllAuthors();
    this.activatedRoute.params.subscribe((data): void => {
      this.courseId = +data.id;
      const coursesSubscription = this.store
        .subscribe((appState: AppState): void => {
          const courses: Course[] = appState.courses.courses;
          const details = courses.find(course => course.id === this.courseId);
          this.course = details;
          this.name.setValue(details.name);
          this.description.setValue(details.description);
          this.date = details.date;
          this.length = details.length;
          this.authors = details.authors;
        });
      this.subscriptions.push(coursesSubscription);
    });
  }
  public ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  public getAllAuthors(): void {
    const authorsSubscription = this.coursesService.getAllAuthors()
      .subscribe((authors: Author2[]) => {
        this.allAuthors = authors.sort();
      });
    this.subscriptions.push(authorsSubscription);
  }
  public get getName() {
    return this.name.value;
  }

  public durationChanged(value): void {
    this.length = +value;
  }
  public authorsChanged(newAuthors): void {
    this.authors = newAuthors;
  }

  public handleSubmitClick(): void {
    this.coursesService.updateCourse({
      id: this.courseId,
      name: this.name.value,
      description: this.description.value,
      date: this.date,
      length: this.length,
      authors: this.authors
    }).subscribe((res) => {
      this.router.navigate(['/courses']);
    });
  }

  public handleCancelClick(): void {
    this.location.back();
  }

  public get isInvalid(): boolean {
    return !this.authorsInputComponent.isValid
    || !this.durationInputComponent.isValid
    || !this.name.valid
    || !this.description.valid;
  }

}
