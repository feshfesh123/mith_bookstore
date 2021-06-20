import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopCartComponent } from './components/cart/shop-cart/shop-cart.component';
import { ShopDetailComponent } from './components/detail/shop-detail/shop-detail.component';
import { ShopFilterComponent } from './components/filter/shop-filter/shop-filter.component';
import { ShopHomeComponent } from './components/home/shop-home/shop-home.component';
import { ShopOrderComponent } from './components/order/shop-order/shop-order.component';

const routes: Routes = [
  {path:'', component: ShopHomeComponent}, 
  {path:'detail/:id', component: ShopDetailComponent},
  {path:'filter/:id', component: ShopFilterComponent},
  {path:'cart', component: ShopCartComponent},
  {path:'order', component: ShopOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
