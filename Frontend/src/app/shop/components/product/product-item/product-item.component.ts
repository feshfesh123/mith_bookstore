import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private cartService: CartService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onBuy(){
    if (this.authService.isLoggedIn()){
      this.cartService.addItem(this.product);
      this.router.navigateByUrl('/cart');
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }

}
