import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { CoursesService } from 'app/services/courses.service';
import { AppState } from 'app/store';
import { OrderByPipe } from 'app/pipes';
import { Course } from 'app/entities/course.model';
import { GetCourses, LoadMoreCourses } from 'app/store/actions/courses.actions';

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
    private store: Store<AppState>,
    private router: Router,
    private orderByPipe: OrderByPipe
  ) { }

  ngOnInit() {
    this.storeCoursesList();
    this.getStoredCoursesList();
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
  public storeCoursesList(): void {
    const coursesSubscription = this.coursesService.getCourses(this.start, this.count)
    .subscribe((courses) => {
      this.store.dispatch(new GetCourses(courses));
    });
    this.subscriptons.push(coursesSubscription);
  }
  public getStoredCoursesList(): void {
    const storeSubscription = this.store
    .subscribe((appState) => {
      this.courses = appState.courses.courses;
    });
    this.subscriptons.push(storeSubscription);
  }
  public searchInCourses(textFragment: string): void {
    const searchSubscription = this.coursesService.searchInCourses(textFragment)
    .subscribe((courses) => {
      this.store.dispatch(new GetCourses(courses));
    });
    this.subscriptons.push(searchSubscription);
  }
  public edited(id: number) {
    this.router.navigate([`/courses/${id}`]);
  }
  public deleted(id: number) {
    this.coursesService.removeCourse(id).subscribe(courses => {
      this.store.dispatch(new GetCourses(courses));
    });
  }
  public loadMore() {
    this.start += 5;
    const loadMoreSubscription = this.coursesService.getCourses(this.start, this.count)
    .subscribe((courses) => {
      this.store.dispatch(new LoadMoreCourses(courses));
    });
    this.subscriptons.push(loadMoreSubscription);
  }

  public get more(): boolean {
    return this.courses.length > 0;
  }

}
