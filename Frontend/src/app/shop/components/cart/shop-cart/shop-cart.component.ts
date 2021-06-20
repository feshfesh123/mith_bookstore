import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CustomerBasket } from 'src/app/models/customerBasket';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  address: string;
  constructor(private router: Router,
    private authService: AuthService,
    public cartService: CartService) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()){
      this.router.navigateByUrl('/login');
    }
    this.authService.decodeToken();
    this.cartService.getCart();
  }

  onCheckout(){
    this.cartService.checkout(this.address);
  }
}
