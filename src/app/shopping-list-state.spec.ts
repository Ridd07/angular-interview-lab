import { TestBed } from '@angular/core/testing';
import { ShoppingListStateService } from './shopping-list-state';

describe('ShoppingListStateService', () => {
  let service: ShoppingListStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
