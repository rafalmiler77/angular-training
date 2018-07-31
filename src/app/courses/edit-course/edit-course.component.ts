import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CoursesService } from 'app/services/courses.service';
import { Course } from 'app/entities/course.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit, OnDestroy {

  public courseId: number;
  public course: Course;
  public title = '';
  public description = '';
  public creationDate;
  public duration;
  public authors = '';
  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
    private location: Location
  ) { }

  public ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.courseId = +data.id;
      this.subscription = this.coursesService.getCourse(this.courseId)
        .subscribe((courseDetails: Course) => {
          this.course = courseDetails;
          this.title = courseDetails.title;
          this.description = courseDetails.description;
          this.creationDate = courseDetails.creationDate;
          this.duration = courseDetails.duration;
        });
    });
  }
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public handleSubmitClick(): void {
    this.coursesService.updateCourse({
      id: this.courseId,
      title: this.title,
      description: this.description,
      creationDate: this.creationDate,
      duration: this.duration
    });
    this.router.navigate(['/courses']);
  }

  public handleCancelClick() {
    this.location.back();
  }

}
