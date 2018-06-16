import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    FooterComponent
  ]
})
export class CoreModule { }
