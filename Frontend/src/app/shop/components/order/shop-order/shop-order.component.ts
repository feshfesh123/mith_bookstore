import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-shop-order',
  templateUrl: './shop-order.component.html',
  styleUrls: ['./shop-order.component.css']
})
export class ShopOrderComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    public orderService: OrderService) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()){
      this.router.navigateByUrl('/login');
    }
    this.authService.decodeToken();
    this.orderService.getOrders();
  }
}
