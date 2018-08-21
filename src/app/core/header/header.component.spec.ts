import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { HeaderComponent } from './header.component';

class StoreMock {
  public dispatch(_: any): void {
    return;
  }
  public subscribe(_: any): Observable<any> {
    return Observable.of();
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
        { provide: Store, useClass: StoreMock }
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

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
