import { Component, ViewChild, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { userMock } from 'app/entities/userMock';
import { User } from 'app/entities/user.model';

@Component({
  selector: 'app-test-host-component',
  template: '<app-header [user]="user"></app-header>'
})
class TestHostComponent {
  @ViewChild(HeaderComponent)
  public testComponent: HeaderComponent;

  public user: User = null;
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let nameElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, TestHostComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = hostComponent.testComponent;

    nameElement = fixture.debugElement.query(By.css('.header__name'));

    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show name if logged', () => {
    hostComponent.user = userMock;
    fixture.detectChanges();
    expect(component.user.firstName).toBe('John');
    expect(nameElement.nativeElement.innerText).toBe('John');
  });

  it('should show name if not logged', () => {
    fixture.detectChanges();
    expect(component.user).toBe(null);
    expect(nameElement.nativeElement.innerText).toBe('');
  });
});
