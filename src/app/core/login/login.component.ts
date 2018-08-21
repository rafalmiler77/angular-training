import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';

import { AuthState } from 'app/store/reducers/auth.reducer';
import { LogIn } from 'app/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output()
  public newLoginSuccess: EventEmitter<any> = new EventEmitter();

  public login = '';
  public password = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private store: Store<AuthState>
  ) { }

  ngOnInit() {
  }
  public handleLoginClick() {
    const user = { login: this.login, password: this.password};
    this.store.dispatch(new LogIn({login: this.login}));
    this.authService.login(user).subscribe((res) => {
      if (res && res.token) {
        this.authService.saveToken(res.token);
        this.newLoginSuccess.emit();
        this.userService.getUser(this.getHome);
      }
    });
  }
  public getHome = () => this.router.navigate(['/courses']);
}
