import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { GraphicsBarHorizontalComponent } from './graphics-bar-horizontal/graphics-bar-horizontal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [NavbarComponent, GraphicsBarHorizontalComponent],
  exports: [NavbarComponent, GraphicsBarHorizontalComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
