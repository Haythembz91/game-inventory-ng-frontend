import { TestBed } from '@angular/core/testing';

import { EquippedItemsStore } from './equipped-items-store';

describe('EquippedItemsStore', () => {
  let service: EquippedItemsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquippedItemsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
