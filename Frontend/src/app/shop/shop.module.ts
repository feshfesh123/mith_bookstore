import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopHomeComponent } from './components/home/shop-home/shop-home.component';
import { CategoryComponent } from './components/home/category/category.component';
import { PosterComponent } from './components/home/poster/poster.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopDetailComponent } from './components/detail/shop-detail/shop-detail.component';
import { FormsModule } from '@angular/forms';
import { ShopFilterComponent } from './components/filter/shop-filter/shop-filter.component';
import { ShopCartComponent } from './components/cart/shop-cart/shop-cart.component';
import { DiscountComponent } from './components/cart/discount/discount.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ShopOrderComponent } from './components/order/shop-order/shop-order.component';


@NgModule({
  declarations: [
    ShopHomeComponent,
    CategoryComponent,
    PosterComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductViewComponent,
    ShopDetailComponent,
    ShopFilterComponent,
    ShopCartComponent,
    DiscountComponent,
    CartItemComponent,
    ShopOrderComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class ShopModule { }
