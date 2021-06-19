import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByeComponent } from './components/bye/bye.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'hello', component: HomeComponent},
  {path: 'bye', component: ByeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
