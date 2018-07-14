import { Injectable } from '@angular/core';
import { User, UserClass } from 'app/entities/user.model';

@Injectable()
export class AuthService {

  constructor() { }

  public getUser(): User {
    const storedObject = localStorage.getItem('currentUser');
    const user = JSON.parse(storedObject);
    return user;
  }

  public isAuthenticated(): boolean {
    const storedObject = localStorage.getItem('currentUser');
    const user = JSON.parse(storedObject);
    return !!user;
  }

  public login(userInfo: User): void {
    localStorage.setItem('currentUser', JSON.stringify(userInfo));
  }

  public logout(): void {
    localStorage.setItem('currentUser', null);
  }

}
