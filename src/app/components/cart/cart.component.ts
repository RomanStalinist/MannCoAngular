import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartItem } from '../../models/ICartItem';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  imports: [NgFor, NgIf, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  cartItems: ICartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(weaponId: number) {
    this.cartService.removeFromCart(weaponId);
  }
}
