import { TestBed } from '@angular/core/testing';

import { EquipItemService } from './equip-item-service';

describe('EquipItemService', () => {
  let service: EquipItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
