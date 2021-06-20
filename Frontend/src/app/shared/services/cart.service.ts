import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BasketItem } from 'src/app/models/basketItem';
import { CustomerBasket } from 'src/app/models/customerBasket';
import { OrderCheckout } from 'src/app/models/orderCheckout';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CustomerBasket;
  items: BasketItem[];
  total: number;
  url: string = environment.baseUrl + 'basket';

  constructor(private http: HttpClient,
    private authService: AuthService) { 
  }
  
  refresh(res: any){
    this.items = res.items;
    this.total = 0;
    for(var item of this.items){
      this.total += item.price * item.quantity;
    }
  }

  getCart(){
    console.log(this.authService.userInfo.userId);
    this.http.get<CustomerBasket>(this.url + '/' + this.authService.userInfo.userId).subscribe((res) =>{
      this.cart = res;
      this.refresh(res);
    });
  }

  addItem(product: Product){
    this.http.post<CustomerBasket>(this.url + '/' + this.authService.userInfo.userId, new BasketItem(0, product.id, product.name, product.pictureUrl, product.price, 1)).subscribe((res)=>{
      this.cart = res;
      this.refresh(res);
    })
  }

  updateItem(itemId: number, quantity: number){
    this.http.post<CustomerBasket>(this.url + '/' + this.authService.userInfo.userId, new BasketItem(itemId, 0, '', '', 0, quantity)).subscribe((res)=>{
      this.cart = res;
      this.refresh(res);
    })
  }

  removeItem(itemId: number){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(new BasketItem(itemId, 0,'', '', 0 ,  0))
    };
    
    this.http.delete<CustomerBasket>(this.url + '/' + this.authService.userInfo.userId, options).subscribe((res)=>{
      this.cart = res;
      this.refresh(res);
    })
  }

  removeCart(){
    this.http.delete<CustomerBasket>(this.url + '/' + this.authService.userInfo.userId + '/clean').subscribe((res)=>{
    })
  }

  checkout(shipToAddress: string){
    this.http.post(environment.baseUrl + 'orders', new OrderCheckout(this.authService.userInfo.userId, shipToAddress)).subscribe((res)=>{
      console.log(res);
      // chuyen ve trang order
    });
  }
}
