import { TestBed } from '@angular/core/testing';

import { BooksFilterService } from './books-filter.service';

describe('BooksFilterService', () => {
  let service: BooksFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
