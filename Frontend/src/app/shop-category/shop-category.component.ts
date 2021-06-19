import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {
  products: Product[] =[
    new Product(0, "Reading on the World", "", 35200, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland5_biaao_trang_bia1_1.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 35200, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland6_biaao_trang.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 34000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland7---bia-ao-trang-02.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 57000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_235327.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 146780, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/0/0/0001_origiffffffnal.jpg', 4, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 114000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_235326.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 97580, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/9/9/999lathu220.jpg', 1, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 88560, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_235325.jpg', 3, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 35200, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland5_biaao_trang_bia1_1.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 35200, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland6_biaao_trang.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 34000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland7---bia-ao-trang-02.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 57000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_235327.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 146780, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/0/0/0001_origiffffffnal.jpg', 4, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 114000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_235326.jpg', 5, "Cổ tích", "Kim Đồng", ""),
    new Product(0, "Reading on the World", "", 97580, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/9/9/999lathu220.jpg', 1, "Cổ tích", "Kim Đồng", ""),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
