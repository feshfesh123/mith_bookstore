import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  quantity : number = 1;
  constructor() { }

  rates = [];

  ngOnInit(): void {
  }

  getRates(){
    return [].constructor(this.product.rating);
  }

  onInc(){
    this.quantity +=1;
  }

  onDes(){
    this.quantity = this.quantity > 1 ? this.quantity - 1 : 1;
  }
}
