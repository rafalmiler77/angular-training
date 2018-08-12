import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { filter, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit, OnDestroy {
  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  public searchTerm = '';
  public inputSubject: Subject<string> = new Subject<string>();
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = this.inputSubject
    .pipe(
      debounceTime(500),
      filter(val => {
        return val && val.length > 3;
      })
    )
    .subscribe(searchTerm => {
      if (this.searchTerm !== searchTerm) {
        this.search.emit(searchTerm);
        this.searchTerm = searchTerm;
      }
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  searchTermChange(val) {
    this.inputSubject.next(val);
  }

}
