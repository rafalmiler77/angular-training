import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchTerm: string;

  constructor() { }

  ngOnInit() {
  }
  public handleSearchTerm(searchTerm) {
    this.searchTerm = searchTerm;
  }

}
