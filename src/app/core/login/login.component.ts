import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { UserClass } from '../../entities/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output()
  public newLoginTry: EventEmitter<any> = new EventEmitter();

  public email = '';
  public password = '';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  public handleLoginClick() {
    console.log('login credentials saved to localstorage', this.email, this.password);
    const user = new UserClass({token: '3', email: this.email, password: this.password})
    this.authService.login(user);
    this.newLoginTry.emit();
  }
}
