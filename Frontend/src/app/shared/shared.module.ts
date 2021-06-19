import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgProgressModule } from '@ngx-progressbar/core';
import { LayoutComponent } from './components/layout/layout.component';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    SlideMenuComponent
  ],
  imports: [
    CommonModule,
    NgProgressModule,
    BrowserAnimationsModule,
    BrowserModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, positionX: 'right'}),
    RouterModule
  ],
  exports:[
    LayoutComponent,
    SlideMenuComponent
  ]
})
export class SharedModule { }
