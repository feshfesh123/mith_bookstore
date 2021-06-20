import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/models/productType';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.css']
})
export class ShopFilterComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute,
    public productService: ProductService,
    public categoryService: CategoryService) { }
  sub: any;
  categoryId: number;

  ngOnInit(): void {
    this.sub = this._ActivatedRoute.paramMap.subscribe(params =>{
      this.categoryId = Number(params.get('id'));
      this.categoryService.getCategories();
      this.productService.getRelatedItems(this.categoryId);
    })
  }

  getCategoryName(id: number) {
    if (this.categoryService.categories.length > 0)
      return this.categoryService.categories.find(x => x.id == this.categoryId).name;
  }
  
}
