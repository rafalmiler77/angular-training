import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/core/header/header.component';
import { BreadcrumbsComponent } from 'app/core/breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from 'app/core/toolbox/toolbox.component';
import { FooterComponent } from 'app/core/footer/footer.component';
import { LoginComponent } from 'app/core/login/login.component';
import { HomeComponent } from 'app/core/home/home.component';
import {
  AddCourseComponent,
  CoursesListComponent,
  CoursesListItemComponent,
  DateInputComponent,
  DurationInputComponent,
  EditCourseComponent
 } from 'app/courses';

import { DurationPipe, OrderByPipe, FilterByPipe } from 'app/pipes';
import { HighlightFreshDirective } from 'app/directives/highlight-fresh.directive';
import { HideDirective } from 'app/directives/hide.directive';

import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';
import { AuthGuard } from 'app/services/auth.guard.service';
import { CoursesService } from 'app/services/courses.service';
import { NotFoundComponent } from 'app/core/not-found/not-found.component';
import { AuthInterceptor } from 'app/services/auth.interceptor';
import { reducers } from 'app/store';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    EditCourseComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ToolboxComponent,
    HideDirective,
    HighlightFreshDirective,
    DurationPipe,
    FilterByPipe,
    OrderByPipe,
    AddCourseComponent,
    DateInputComponent,
    DurationInputComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Angular2FontawesomeModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [
    AuthService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    CoursesService,
    FilterByPipe,
    OrderByPipe,
    DurationPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
