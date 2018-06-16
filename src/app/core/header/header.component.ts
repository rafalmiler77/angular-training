import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../entities/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public user: User | null = null;

  constructor() { }

  ngOnInit() {
  }
  public get getLogLabel() {
    return this.user === null
      ? 'Log in'
      : 'Logout';
  }
}
