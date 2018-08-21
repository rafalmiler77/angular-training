import { AuthService } from 'app/services/auth.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogInSuccess, LogOut } from 'app/store/actions/auth.actions';
import { AppState } from 'app/store';
import { User } from 'app/entities/user.model';

@Injectable()
export class UserService {

  public user: User | null = null;
  public loggedIn = false;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {
    this.store.subscribe(appState => {
      this.loggedIn = appState.auth.loggedIn;
    });
  }

  public isAuthenticated(): boolean {
    const storedObject = localStorage.getItem('loggedToken');
    const token = JSON.parse(storedObject);
    return this.loggedIn;

  }

  public getUser(callback: Function) {
    this.authService.getUser()
      .subscribe((user: User) => {
        this.store.dispatch(new LogInSuccess({
          login: user.login,
          fakeToken: user.fakeToken,
        }));
        this.user = user;
        this.authService.saveUserLogin(user.login);
        callback();
      });
  }

  public logout() {
    this.store.dispatch(new LogOut({
      login: null
    }));
    this.user = null;
    this.authService.removeToken();
    this.authService.removeUserLogin();
  }
}
