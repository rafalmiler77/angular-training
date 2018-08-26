import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';

import { AuthState } from 'app/store/reducers/auth.reducer';
import { LogIn } from 'app/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output()
  public newLoginSuccess: EventEmitter<any> = new EventEmitter();

  public login = new FormControl('');
  public password = new FormControl('');
  public user = new FormGroup({
    login: this.login,
    password: this.password
  });

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private store: Store<AuthState>
  ) { }

  public handleLoginClick() {
    this.store.dispatch(new LogIn({login: this.login.value}));
    this.authService.login(this.user.value).subscribe((res) => {
      if (res && res.token) {
        this.authService.saveToken(res.token);
        this.newLoginSuccess.emit();
        this.userService.getUser(this.getHome);
      }
    });
  }
  public getHome = () => this.router.navigate(['/courses']);
}
