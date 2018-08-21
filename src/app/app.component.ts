import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { User } from 'app/entities/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user: User;
  public isAuthenticated;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isAuthenticated = this.userService.isAuthenticated();
  }

  public loggedOut() {
    this.user = null;
    this.userService.logout();
    this.isAuthenticated = this.userService.isAuthenticated();
  }

  public newLoginSuccess() {
    this.isAuthenticated = true;
  }
}
