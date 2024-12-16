import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICartItem } from '../models/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ICartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<ICartItem[]>(this.cartItems);

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(weapon: any) {
    const existingItem = this.cartItems.find(item => item.weapon.id === weapon.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ weapon, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(weaponId: number) {
    this.cartItems = this.cartItems.filter(item => item.weapon.id !== weaponId);
    this.cartItemsSubject.next(this.cartItems);
  }
}
