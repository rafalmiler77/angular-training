import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { UserService } from 'app/services/user.service';
import { HeaderComponent } from './header.component';
import { userMock } from 'app/entities/userMock';
import { User } from 'app/entities/user.model';
import { Subject } from 'rxjs/Subject';

class UserServiceMock {
  public newUserSubject(): Subject<User> {
    return new Subject<User>();
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let nameElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    // userServiceMock = TestBed.get(UserService);
    // userServiceMock.newUserSubject.and.returnValue(Observable.of(userMock));
    nameElement = fixture.debugElement.query(By.css('.header__name'));

    fixture.detectChanges();
  });

  xit('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
