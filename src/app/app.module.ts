import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FormsModule } from '@angular/forms';
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
import { CoursesListComponent } from 'app/courses/courses-list/courses-list.component';
import { CoursesListItemComponent } from 'app/courses/courses-list-item/courses-list-item.component';

import { DurationPipe, OrderByPipe, FilterByPipe } from 'app/pipes';
import { HighlightFreshDirective } from 'app/directives/highlight-fresh.directive';
import { HideDirective } from 'app/directives/hide.directive';

import { AuthService } from './services/auth.service';
import { CoursesService } from 'app/services/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ToolboxComponent,
    HideDirective,
    HighlightFreshDirective,
    DurationPipe,
    FilterByPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Angular2FontawesomeModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    CoursesService,
    FilterByPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
