import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'app/entities/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  public user: User | null = null;

  @Output()
  public logout: EventEmitter<any> = new EventEmitter();

  public get getLogStatusLabel() {
    return this.user === null
      ? 'Log in'
      : 'Logout';
  }
  public handleLogClick(): void {
    this.user === null
      ? this.handleLogin()
      : this.handleLogout();
  }
  public get getEmail() {
    return this.user === null
      ? ''
      : this.user.email;
  }
  public handleLogin() {
    console.log('login clicked, should change to login page in future');
  }
  public handleLogout() {
    this.logout.emit();
  }
}
