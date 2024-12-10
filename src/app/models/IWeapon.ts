import { IModification } from "./IModification";

export interface IWeapon {
  id: number,
  name: string,
  type: string,
  class: string,
  preview: string,
  modifications: IModification[]
}
