import { Route } from '@angular/router';
import { LoginComponent } from 'app/core/login/login.component';
import { AuthGuard } from 'app/services/auth.guard.service';
import { HomeComponent } from 'app/core/home/home.component';
import { NotFoundComponent } from 'app/core/not-found/not-found.component';
import { AddCourseComponent } from 'app/courses/add-course/add-course.component';
import { EditCourseComponent } from 'app/courses/edit-course/edit-course.component';

export const ROUTES: Route[] = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'courses/new', component: AddCourseComponent, canActivate: [AuthGuard]},
  {path: 'courses/:id', component: EditCourseComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},
];
