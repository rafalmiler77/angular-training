import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { User } from 'app/entities/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  public logout: EventEmitter<any> = new EventEmitter();

  public user: User | null = null;

  constructor(
    private userService: UserService
  ) {}

  public ngOnInit() {
    this.userService.newUserSubject
    .subscribe((user) => {
      this.user = user;
    });
  }

  public get notLogged() {
    return this.user === null || this.user === undefined;
  }

  public handleLogoutClick(): void {
    this.user = null;
    this.logout.emit();
  }

  public get userLogin() {
    return this.notLogged
      ? ''
      : this.user.login;
  }
}

