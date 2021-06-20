import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute,
    public productService: ProductService) { }
  sub: any;
  product: Product;

  ngOnInit(): void {
    this.sub = this._ActivatedRoute.paramMap.subscribe(params =>{
      let productId = Number(params.get('id'));
      this.productService.getItem(productId).subscribe((res) =>{
        this.product = res;
        this.productService.getRelatedItems(res.productTypeId);
      })
    })
  }

}
