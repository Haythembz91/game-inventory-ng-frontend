import {ItemType, Rarity} from './enums';


export interface Item{
  id:string,
  name:string,
  description:string,
  type:ItemType,
  rarity:Rarity,
  damage?:number,
  defense?:number,
  attackSpeed?:number,
  healAmount?:number,
  isOwned:boolean,
  isEquipped?:boolean,
  icon:string,
  buyPrice:number,
  sellPrice:number
}

export interface EquipResponse {
  message: string;
  equippedItems?: {
    id: string;
    itemId: string;
  }[];
}

export interface EquippedItems {
  id:string,
  name:string,
  description:string,
  type:ItemType,
  rarity:Rarity,
  damage?:number,
  defense?:number,
  attackSpeed?:number,
  healAmount?:number,
  isOwned:boolean,
  isEquipped?:boolean,
  icon:string,
  buyPrice:number,
  sellPrice:number
}
