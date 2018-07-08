import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HideDirective } from './hide.directive';

@Component({
  template: `<div *appHide="shouldHide">something</div>`
})
class TestHideComponent {
  public shouldHide: boolean;
}

describe('Directive: HideDirective', () => {

  let component: TestHideComponent;
  let fixture: ComponentFixture<TestHideComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHideComponent, HideDirective]
    });
    fixture = TestBed.createComponent(TestHideComponent);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
  });

  it('should not show content', () => {
    component.shouldHide = true;
    fixture.detectChanges();
    expect(el.innerText).toBe('');
  });
  it('should show content', () => {
    component.shouldHide = false;
    fixture.detectChanges();
    expect(el.innerText).toBe('something');
  });
});
