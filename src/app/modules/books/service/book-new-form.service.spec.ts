import { TestBed } from '@angular/core/testing';

import { BookNewFormService } from './book-new-form.service';

describe('BookNewFormService', () => {
  let service: BookNewFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookNewFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
