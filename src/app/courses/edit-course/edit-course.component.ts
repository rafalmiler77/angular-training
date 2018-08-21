import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { CoursesService } from 'app/services/courses.service';
import { Course } from 'app/entities/course.model';
import { AppState } from 'app/store';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, OnDestroy {

  public courseId: number;
  public course: Course;
  public name = '';
  public description = '';
  public date;
  public length;
  public authors = '';
  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private store: Store<AppState>,
    private router: Router,
    private location: Location
  ) { }

  public ngOnInit() {
    this.activatedRoute.params.subscribe((data): void => {
      this.courseId = +data.id;
      this.subscription = this.store
        .subscribe((appState: AppState): void => {
          const courses: Course[] = appState.courses.courses;
          const details = courses.find(course => course.id === this.courseId);
          this.course = details;
          this.name = details.name;
          this.description = details.description;
          this.date = details.date;
          this.length = details.length;
        });
    });
  }
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public handleSubmitClick(): void {
    this.coursesService.updateCourse({
      id: this.courseId,
      name: this.name,
      description: this.description,
      date: this.date,
      length: this.length
    }).subscribe((res) => {
      this.router.navigate(['/courses']);
    });
  }

  public handleCancelClick() {
    this.location.back();
  }

}
