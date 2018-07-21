import { Route } from '@angular/router';
import { LoginComponent } from 'app/core/login/login.component';
import { HomeComponent } from 'app/core/home/home.component';
import { AddCourseComponent } from 'app/courses/add-course/add-course.component';

export const ROUTES: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'add-course', component: AddCourseComponent}
];
