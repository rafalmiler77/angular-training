import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Output()
  public search: EventEmitter<string> = new EventEmitter<string>();

  public searchTerm = '';

  constructor() { }

  ngOnInit() {
  }
  public handleSearchClick() {
    this.search.emit(this.searchTerm);
  }
}
