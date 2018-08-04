import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CoursesService } from 'app/services/courses.service';
import { OrderByPipe } from 'app/pipes';
import { Course } from 'app/entities/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public searchTerm: string;

  public courses: Course[] = [];
  public start = 0;
  public count = 5;
  private subscriptons: Subscription[] = [];

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private orderByPipe: OrderByPipe
  ) { }

  ngOnInit() {
    this.getCoursesList();
  }

  ngOnChanges({searchTerm}: SimpleChanges) {
    const phrase = searchTerm.currentValue;
    if (phrase !== undefined) {
      this.searchInCourses(phrase);
    }
  }
  ngOnDestroy() {
    this.subscriptons.forEach(sub => sub.unsubscribe());
  }
  public getCoursesList(): void {
    const coursesSubscription = this.coursesService.getCourses(this.start, this.count)
    .subscribe((courses) => {
      this.courses = courses;
    });
    this.subscriptons.push(coursesSubscription);
  }
  public searchInCourses(textFragment: string): void {
    const searchSubscription = this.coursesService.searchInCourses(textFragment)
    .subscribe((courses) => {
      this.courses = courses;
    });
    this.subscriptons.push(searchSubscription);
  }
  public edited(id: number) {
    this.router.navigate([`/courses/${id}`]);
  }
  public deleted(id: number) {
    this.coursesService.removeCourse(id).subscribe(courses => {
      this.courses = courses;
    });
  }
  public loadMore() {
    console.log('clicked loading more');
    this.start += 5;
    const loadMoreSubscription = this.coursesService.getCourses(this.start, this.count)
    .subscribe((courses) => {
      this.courses = this.courses.concat(courses);
    });
    this.subscriptons.push(loadMoreSubscription);
  }

  public get more(): boolean {
    return this.courses.length > 0;
  }

}
