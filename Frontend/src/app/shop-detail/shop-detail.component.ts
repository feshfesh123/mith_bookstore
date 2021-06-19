import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  relatedProducts: Product[] =[
    new Product(0, "Reading on the World", "", 35200, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland5_biaao_trang_bia1_1.jpg', 5, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 35200, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland6_biaao_trang.jpg', 5, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 34000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland7---bia-ao-trang-02.jpg', 5, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 57000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_235327.jpg', 5, "Cổ tích", "Kim Đồng",""),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
