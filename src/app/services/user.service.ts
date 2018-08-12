import { AuthService } from 'app/services/auth.service';
import { Injectable } from '@angular/core';
import { User } from 'app/entities/user.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  public user: User | null = null;
  public newUserSubject: Subject<User> = new Subject<User>();

  constructor(
    private authService: AuthService
  ) { }

  public getUser() {
    this.authService.getUser()
      .subscribe((user) => {
        this.user = user;
        this.newUserSubject.next(user);
      });
  }
}
