import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductType } from 'src/app/models/productType';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  form : FormGroup;
  private url = environment.baseUrl + 'categories';
  categories : ProductType[] = [];

  constructor(private http:HttpClient) { 
    this.initializeForm();
  }

  initializeForm(){
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required)
    });
  }

  initializeEditForm(id: number){
    this.getCategory(id).subscribe((item) => {
      this.form = new FormGroup({
        id : new FormControl(item.id),
        name : new FormControl(item.name, Validators.required)
      })
    });
  }

  getCategories(){
    return this.http.get<ProductType[]>(this.url).subscribe(
      (res) => {
        this.categories = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCategory(id: number){
    return this.http.get<ProductType>(this.url + '/' + id.toString());
  }

  createOrUpdateCategory(){
    if (this.form.value.id == 0) 
      return this.http.post(this.url, this.form.value);
    return this.http.post(this.url + '/' + this.form.value.id.toString(), this.form.value);
  }

  deleteCategory(id: number){
    return this.http.delete(this.url + '/' + id.toString());
  }

}
