import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryManagerComponent } from './components/category/category-manager/category-manager.component';
import { PosterManagerComponent } from './components/poster/poster-manager/poster-manager.component';
import { ProductManagerComponent } from './components/product/product-manager/product-manager.component';

const routes: Routes = [
  {path:'admin/category-manager', component: CategoryManagerComponent},
  {path:'admin/poster-manager', component: PosterManagerComponent},
  {path:'admin/product-manager', component: ProductManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
