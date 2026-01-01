import { TestBed } from '@angular/core/testing';

import { AddItem } from './add-item';

describe('AddItem', () => {
  let service: AddItem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddItem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
