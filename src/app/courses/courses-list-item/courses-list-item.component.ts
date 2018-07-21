import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Course } from 'app/entities/course.model';

@Component({
  selector: 'app-courses-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css']
})
export class CoursesListItemComponent implements OnInit {
  public modalRef: BsModalRef;

  @Input()
  public course: Course;

  @Output()
  public edited: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public deleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }
  public get creationDate() {
    return this.course.creationDate;
  }
  public get shouldHide() {
    return !this.course.topRated;
  }
  public editCourse(): void {
    this.edited.emit(this.course.id);
  }
  public deleteCourse(): void {
    this.deleted.emit(this.course.id);
    this.modalRef.hide();
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
