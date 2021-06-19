import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CartComponent } from './shopping/cart/cart.component';
import { ProductItemComponent } from './shopping/product-item/product-item.component';
import { CategoryComponent } from './shopping/category/category.component';
import { BannerComponent } from './shopping/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { ProductDetailComponent } from './shop-detail/product-detail/product-detail.component';
import { ProductViewComponent } from './shop-detail/product-view/product-view.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    CartComponent,
    ProductItemComponent,
    CategoryComponent,
    BannerComponent,
    ShopDetailComponent,
    ProductDetailComponent,
    ProductViewComponent,
    ShopCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    AdminModule,
    BrowserAnimationsModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
