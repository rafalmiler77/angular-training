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

  public get notLogged() {
    return this.user === null || this.user === undefined;
  }

  public handleLogClick(): void {
    this.logout.emit();
  }
  public get getLogin() {
    return this.notLogged
      ? ''
      : this.user.login;
  }
}
