import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginData } from 'app/store/reducers/auth.reducer';
import { AppState } from 'app/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  public logout: EventEmitter<any> = new EventEmitter();

  public user: LoginData | null = null;
  public isLogged = false;

  constructor(
    private store: Store<AppState>
  ) {}

  public ngOnInit() {
    this.store.subscribe((appState: AppState) => {
      this.isLogged = appState.auth.loggedIn;
      this.user = appState.auth.user ? appState.auth.user : null;
    });
  }

  public handleLogoutClick(): void {
    this.user = null;
    this.logout.emit();
  }

  public get userLogin() {
    return this.isLogged
      ? this.user.login
      : '';
  }
}

