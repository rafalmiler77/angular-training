import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
// import { DurationPipe } from './pipe/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
