import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Order } from 'src/app/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[];
  selectedOrder: Order;

  url: string = environment.baseUrl + 'orders';
  constructor(private authService: AuthService,
    private http: HttpClient) { }

  getOrders(){
    this.http.get<Order[]>(this.url + '/' + this.authService.userInfo.userId).subscribe((res)=>{
      this.orders = res;
    });
  }

  updateStatus(id: number){
    this.http.get(this.url + "/manager/" + id.toString() + '/done').subscribe(()=>{
      this.getOrders();
    });
  }

  selectOrder(id:number){
    this.selectedOrder = this.orders.find(x => x.id == id);
  }
}
