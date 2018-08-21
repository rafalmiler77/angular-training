import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard.service';

class UserServiceMock {
  public isAuthenticated(): boolean {
    return false;
  }
}

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock
        },
        AuthGuard
      ]
    });
  });

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
