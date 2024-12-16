import { CartService } from './../../services/cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IWeapon } from '../../models/IWeapon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';
import { IModification } from '../../models/IModification';

@Component({
  selector: 'app-weapon-details',
  imports: [ RouterLink, NgFor ],
  templateUrl: './weapon-details.component.html',
  styleUrl: './weapon-details.component.less'
})
export class WeaponDetailsComponent implements OnInit, OnDestroy {

  weapon: IWeapon
  weaponsSubsription: Subscription

  constructor(private route: ActivatedRoute,
    private CartService: CartService
  ) { }

  ngOnInit(): void {
    this.weaponsSubsription = this.route.data.subscribe(
      data => this.weapon = data['data'][0])
  }

  ngOnDestroy(): void {
    this.weaponsSubsription.unsubscribe();
  }

  addToCart() {
    this.CartService.addToCart(this.weapon);
  }

  selectModification(mod: IModification) {
    this.weapon.name = mod.name
    this.weapon.preview = mod.image
  }

}
