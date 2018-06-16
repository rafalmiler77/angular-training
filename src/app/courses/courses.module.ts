import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesService } from '../services/courses.service';
import { DurationPipe } from '../pipe/duration.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesListComponent, CoursesListItemComponent, DurationPipe],
  exports: [CoursesListComponent],
  providers: [CoursesService, DurationPipe]
})
export class CoursesModule { }
