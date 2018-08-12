import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';

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
  ) { }

  ngOnInit() {
  }
  public handleLoginClick() {
    const user = { login: this.login, password: this.password};
    this.authService.login(user).subscribe((res) => {
      if (res && res.token) {
        this.authService.saveToken(res.token);
        this.newLoginSuccess.emit();
        this.userService.getUser();
        this.router.navigate(['/courses']);
      }
    });
  }
}
