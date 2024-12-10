import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeapon } from '../models/IWeapon';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {
  url: string = 'http://localhost:3000/weapons'

  constructor(private httpClient: HttpClient) { }

  getWeapons() {
    return this.httpClient.get<IWeapon[]>(this.url);
  }

  getWeapon(id: number) {
    return this.httpClient.get<IWeapon>(`${this.url}?id=${id}`)
  }
}
