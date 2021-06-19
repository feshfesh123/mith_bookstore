import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path: '', redirectTo: '/shop-home', pathMatch: 'full'},
  {path: 'shop-home', component: ShoppingComponent},
  {path: 'shop-detail', component: ShopDetailComponent},
  {path: 'shop-category', component: ShopCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
