import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesModule } from 'app/courses/courses.module';

import { HeaderComponent } from 'app/core/header/header.component';
import { BreadcrumbsComponent } from 'app/core/breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from 'app/core/toolbox/toolbox.component';
import { FooterComponent } from 'app/core/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoursesModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    FooterComponent,
    LoginComponent
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    FooterComponent,
    LoginComponent
  ]
})
export class CoreModule { }
