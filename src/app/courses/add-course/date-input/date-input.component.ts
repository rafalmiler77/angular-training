import { Component } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent {

  public date;

  public get dateObj(): Date {
    return new Date(this.date);
  }
  public set setDate(date) {
    this.date = date;
  }

}
