import { Injectable, signal } from '@angular/core';
import { EquippedItemsService } from './equipped-items-service';
import { EquipItemService } from './equip-item-service';
import { EquippedItems } from '../libs/interfaces';

@Injectable({ providedIn: 'root' })
export class EquippedItemsStore {

  equippedItems = signal<EquippedItems[]>([]);

  constructor(
    private equippedItemsService: EquippedItemsService,
    private equipItemService: EquipItemService
  ) {}

  // 🔄 load equipped items
  load() {
    this.equippedItemsService.getEquippedItems()
      .subscribe(items => this.equippedItems.set(items));
  }

}
