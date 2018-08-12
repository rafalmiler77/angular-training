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
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  public loggedOut() {
    this.user = null;
    this.authService.logout();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  public newLoginSuccess() {
    this.isAuthenticated = true;
  }
}
