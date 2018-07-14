import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
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
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUser();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  private getUser() {
    this.user = this.authService.getUser();
  }

  public loggedOut() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.getUser();
  }
  public newLoginTried() {
    this.isAuthenticated = true;
    this.getUser();
  }
}
