import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CategoryManagerComponent } from './components/category/category-manager/category-manager.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PosterManagerComponent } from './components/poster/poster-manager/poster-manager.component';
import { PosterEditComponent } from './components/poster/poster-edit/poster-edit.component';
import { ProductManagerComponent } from './components/product/product-manager/product-manager.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    CategoryManagerComponent,
    CategoryEditComponent,
    PosterManagerComponent,
    PosterEditComponent,
    ProductManagerComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    CategoryEditComponent,
    PosterEditComponent
  ]
})
export class AdminModule { }
