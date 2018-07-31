import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public courseTitle: string;

  public breadcrumbs: string[] = [];
  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  public ngOnInit() {
    this.subscription = this.activatedRoute.url.subscribe((url) => {
      this.breadcrumbs = url.map(segment => segment.path);
      this.updateCourseName();
    });
  }
  public ngOnChanges() {
    this.updateCourseName();
  }
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  public handleClick(item) {
    if (item === this.breadcrumbs[0]) {
      this.router.navigate([`${item}`]);
    }
  }
  private updateCourseName() {
    if (this.courseTitle && this.breadcrumbs.length > 1) {
      this.breadcrumbs[1] = this.courseTitle;
    }
  }

}
