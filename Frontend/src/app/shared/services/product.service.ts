import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  form: FormGroup;
  url: string = environment.baseUrl + 'products/manager';
  items : Product[] = [];
  relatedItems : Product[] = [];

  constructor(private http: HttpClient) {
    this.initializeForm();
  }

  initializeForm(){
    this.form = new FormGroup({
      id : new FormControl(0),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl(0, Validators.required),
      pictureUrl: new FormControl('', Validators.required),
      rating: new FormControl(0, Validators.required),
      productTypeId: new FormControl(0, Validators.required),
      author: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),
    })
  }

  initializeEditForm(id: number){
    this.getItem(id).subscribe((item) => {
      this.form = new FormGroup({
        id : new FormControl(item.id),
        name: new FormControl(item.name, Validators.required),
        description: new FormControl(item.description, Validators.required),
        price: new FormControl(item.price, Validators.required),
        pictureUrl: new FormControl(item.pictureUrl, Validators.required),
        rating: new FormControl(item.rating, Validators.required),
        productTypeId: new FormControl(item.productTypeId, Validators.required),
        author: new FormControl(item.author, Validators.required),
        publisher: new FormControl(item.publisher, Validators.required)
      })
    });
  }

  createOrUpdateItem(){
    if (this.form.value.id == 0) {
      return this.http.post(this.url, this.form.value);
    }
    return this.http.post(this.url + '/' + this.form.value.id.toString(), this.form.value);
  }

  getItems(){
    return this.http.get<Product[]>(this.url).subscribe(
      (res) => {
        this.items = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getRelatedItems(categoryId : number){
    return this.http.get<Product[]>(this.url + '/related/' + categoryId.toString()).subscribe(
      (res) => {
        this.relatedItems = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getItem(id: number){
    return this.http.get<Product>(this.url + '/' + id.toString());
  }

  deleteItem(id: number){
    return this.http.delete(this.url + '/' + id.toString());
  }
}
