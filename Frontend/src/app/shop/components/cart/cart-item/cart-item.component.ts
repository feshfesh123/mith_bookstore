import { Component, Input, OnInit } from '@angular/core';
import { BasketItem } from 'src/app/models/basketItem';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: BasketItem;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.item);
  }

  onDesc(){
    if (this.item.quantity > 1) {
      this.item.quantity -= 1;
      this.cartService.updateItem(this.item.id, this.item.quantity);
    }
  }

  onInc(){
    this.item.quantity += 1;
    this.cartService.updateItem(this.item.id, this.item.quantity);
  }

  onRemove(){
    this.cartService.removeItem(this.item.id);
  }
}
