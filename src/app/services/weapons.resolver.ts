import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Router
} from '@angular/router';
import { EMPTY, catchError, map } from 'rxjs';
import { IWeapon } from './../models/IWeapon';
import { WeaponsService } from './weapons.service';

export const weaponsResolver: ResolveFn<IWeapon | null> = (
  route: ActivatedRouteSnapshot,
) => {

  const isEmpty = (obj: any) => {
    return Object.keys(obj).length === 0;
  };

  const weaponsService = inject(WeaponsService);
  const router = inject(Router);

  return weaponsService.getWeapon(route.params?.['id']).pipe(
    map(weapon => {
      if (isEmpty(weapon))
        throw new Error('Weapon not found');
      return weapon;
    }),
    catchError(() => {
      router.navigate(['weapons']);
      return EMPTY;
    })
  );
};
