import { Component, Input } from '@angular/core';
import { User } from 'app/entities/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  public user: User | null = null;

  public get getLogLabel() {
    return this.user === null
      ? 'Log in'
      : 'Logout';
  }
  public get getFirstName() {
    return this.user === null
      ? ''
      : this.user.firstName;
  }
}
