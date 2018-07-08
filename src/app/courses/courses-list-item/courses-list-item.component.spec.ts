import { Component, ViewChild, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HighlightFreshDirective } from 'app/directives/highlight-fresh.directive';
import { DurationPipe } from 'app/pipes/duration.pipe';
import { CoursesListItemComponent } from './courses-list-item.component';
import { coursesMock } from 'app/entities/coursesMock';
import { Course } from 'app/entities/course.model';
import { HideDirective } from 'app/directives/hide.directive';

@Component({
  selector: 'app-test-host-component',
  template: `<app-courses-list-item
              [course]="course"
              (edited)="edited($event)">
            </app-courses-list-item>`
})
class TestHostComponent {
  @ViewChild(CoursesListItemComponent)
  public testComponent: CoursesListItemComponent;

  public course: Course = coursesMock[0];
  public id: number;
  public edited(id: number) {
    return this.id = id;
  }
}

describe('CoursesListItemComponent', () => {
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let component: CoursesListItemComponent;
  let editButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListItemComponent,
        TestHostComponent,
        DurationPipe,
        HighlightFreshDirective,
        HideDirective
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = hostComponent.testComponent;
    editButton = fixture.debugElement.query(By.css('.courses-list-item__edit'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should pass the correct id of the edited course', () => {
    editButton.triggerEventHandler('click', null);
    expect(hostComponent.id).toBe(1);

    hostComponent.course = coursesMock[1];
    fixture.detectChanges();
    editButton.triggerEventHandler('click', null);
    expect(hostComponent.id).toBe(2);
  });
});
