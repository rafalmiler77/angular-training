import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/services/auth.service';
import { UserService } from './user.service';
import { User } from 'app/entities/user.model';
import { userMock } from 'app/entities/userMock';

class AuthServiceMock {
  public getUser(): Observable<User> {
    return Observable.of(userMock);
  }
}

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceMock
        },
        UserService
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
