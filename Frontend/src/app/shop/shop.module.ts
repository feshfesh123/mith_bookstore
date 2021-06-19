import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ByeComponent } from './components/bye/bye.component';


@NgModule({
  declarations: [
    HomeComponent,
    ByeComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
