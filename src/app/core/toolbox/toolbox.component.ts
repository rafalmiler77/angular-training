import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  public searchTerm = '';

  constructor() { }

  ngOnInit() {
  }
  public handleClick() {
    console.log('click', this.searchTerm);
  }
}
