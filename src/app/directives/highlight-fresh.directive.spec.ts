import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { getPastDate, getFutureDate } from 'app/helpers/helpers';
import { HighlightFreshDirective } from './highlight-fresh.directive';

@Component({
  template: `<div [appHighlightFresh]="creationDate">something</div>`
})
class TestHighlightComponent {
  public creationDate: Date;
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
    component.creationDate = getPastDate(5);
    fixture.detectChanges();
    expect(el.nativeElement.style.border).toBe('2px solid green');
  });
  it('should show blue border', () => {
    component.creationDate = getFutureDate(5);
    fixture.detectChanges();
    expect(el.nativeElement.style.border).toBe('2px solid blue');
  });
});
