import { CartService } from './../../services/cart.service';
import { RouterLink } from '@angular/router';
import { WeaponsService } from './../../services/weapons.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { IWeapon } from '../../models/IWeapon';
import { Subscription } from 'rxjs';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-weapons',
  imports: [ MatCardModule, MatIconModule, MatButtonModule, NgForOf, HttpClientModule, RouterLink ],
  templateUrl: './weapons.component.html',
  styleUrl: './weapons.component.less'
})
export class WeaponsComponent implements OnInit, OnDestroy {
  weapons: IWeapon[];
  weaponsSubscription: Subscription

  constructor(private WeaponsService: WeaponsService,
    private CartService: CartService) { }

  ngOnInit(): void {
    this.weaponsSubscription = this.WeaponsService.getWeapons()
      .subscribe(data => this.weapons = data);
  }

  ngOnDestroy(): void {
    this.weaponsSubscription?.unsubscribe();
  }

  addToCart(weapon: IWeapon) {
    this.CartService.addToCart(weapon);
  }
}
