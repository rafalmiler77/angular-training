import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { LoginComponent } from './login.component';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';
import { userMock } from 'app/entities/userMock';
import { User } from 'app/entities/user.model';

class AuthServiceMock {
  public login() {
  }
}
class UserServiceMock {
  public getUser(): Observable<User> {
    return Observable.of(userMock);
  }
}
class StoreMock {
  public dispatch = (_: any) => null;
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const routerMock: Router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: UserService, useClass: UserServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: Store, useClass: StoreMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
