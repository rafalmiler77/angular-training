import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { getPastDate, getFutureDate } from 'app/helpers/helpers';
import { HighlightFreshDirective } from './highlight-fresh.directive';

@Component({
  template: `<div [appHighlightFresh]="date">something</div>`
})
class TestHighlightComponent {
  public date: Date;
}

describe('Directive: HighlightFreshDirective', () => {

  let component: TestHighlightComponent;
  let fixture: ComponentFixture<TestHighlightComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHighlightComponent, HighlightFreshDirective]
    });
    fixture = TestBed.createComponent(TestHighlightComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('div'));
  });

  it('should show green border', () => {
    component.date = getPastDate(5);
    fixture.detectChanges();
    expect(el.nativeElement.style.border).toBe('2px solid green');
  });
  it('should show blue border', () => {
    component.date = getFutureDate(5);
    fixture.detectChanges();
    expect(el.nativeElement.style.border).toBe('2px solid blue');
  });
});
