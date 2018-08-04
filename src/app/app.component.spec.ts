import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { User } from 'app/entities/user.model';
import { Observable } from 'rxjs/Observable';

class AuthServiceMock {
  public getUser(): Observable<User> {
    return Observable.of(null);
  }
  public isAuthenticated(): boolean {
    return false;
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceMock
        },
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should initialize with not logged user', async(() => {
    component.ngOnInit();
    expect(component.user).toEqual(null);
  }));

});
