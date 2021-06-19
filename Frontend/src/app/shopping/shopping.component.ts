import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/brand';
import { Product } from '../models/product';
import { ProductType } from '../models/productType';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];
  brands: Brand[] = [
    {"id": 0, "name": "Kim đồng"},
    {"id": 1, "name": "Kim đồng"},
    {"id": 2, "name": "Kim đồng"},
    {"id": 3, "name": "Kim đồng"},
    {"id": 3, "name": "Kim đồng"},
    {"id": 3, "name": "Kim đồng"},
    {"id": 3, "name": "Kim đồng"},
  ];
  types: ProductType[] = [
    {"id": 3, "name": "Cổ tích"},
    {"id": 3, "name": "Cổ tích"},
    {"id": 3, "name": "Cổ tích"},
    {"id": 3, "name": "Cổ tích"},
    {"id": 3, "name": "Cổ tích"},
    {"id": 3, "name": "Cổ tích"},
  ];

  products: Product[] =[
    new Product(0, "Reading on the World", "", 35200, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland5_biaao_trang_bia1_1.jpg', 5, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 35200, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland6_biaao_trang.jpg', 5, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 34000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/n/e/neverland7---bia-ao-trang-02.jpg', 5, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 57000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_235327.jpg', 5, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 146780, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/0/0/0001_origiffffffnal.jpg', 4, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 114000, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_235326.jpg', 5, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 97580, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/9/9/999lathu220.jpg', 1, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 88560, 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_235325.jpg', 3, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 0, 'https://www.bookopolis.com/img/no_book_cover.jpg', 2, "Cổ tích", "Kim Đồng",""),
    new Product(0, "Reading on the World", "", 0, 'https://www.bookopolis.com/img/no_book_cover.jpg', 0, "Cổ tích", "Kim Đồng",""),
  ];

  constructor() { 
    console.log(this.brands[0].name);
  }

  ngOnInit(): void {
  }

  onSortSelected(sort: string) {
  }
}
