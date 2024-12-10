import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { WeaponDetailsComponent } from './components/weapon-details/weapon-details.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { weaponsResolver } from './services/weapons.resolver';

export const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'weapons', component: WeaponsComponent},
  {path: 'weapon/:id', component: WeaponDetailsComponent, resolve: {data: weaponsResolver}},
  { path: '**', redirectTo: '', component: BaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
