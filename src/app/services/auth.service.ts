import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User, UserCredentials } from 'app/entities/user.model';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public getUser(): Observable<User> {
    const storedToken = localStorage.getItem('loggedToken');
    const body = JSON.parse(storedToken);
    const url = `http://localhost:3004/auth/userinfo`;
    return this.http.post<any>(url, body);
  }

  public isAuthenticated(): boolean {
    const storedObject = localStorage.getItem('loggedToken');
    const token = JSON.parse(storedObject);
    return !!token;
  }

  public login(userCredentials: UserCredentials): Observable<any> {
    localStorage.setItem('loggedToken', JSON.stringify('userInfo'));
    const body = userCredentials;
    const url = `http://localhost:3004/auth/login`;
    return this.http.post<any>(url, body);
  }
  public saveToken(token: string): void {
    localStorage.setItem('loggedToken', JSON.stringify(token));
  }

  public logout(): void {
    localStorage.setItem('loggedToken', JSON.stringify(null));
  }

}
