import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from 'app/services/auth.service';
import { AuthGuard } from './auth.guard.service';

class AuthServiceMock {
  public isAuthenticated(): boolean {
    return false;
  }
}

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceMock
        },
        AuthGuard
      ]
    });
  });

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
