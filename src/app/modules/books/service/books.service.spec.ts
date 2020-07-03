import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

import books from 'src/mocks/books.json';
import { Subscription, from } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

describe('BooksService', () => {
  let service: BooksService;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  afterEach(() => {
    if (subscription && !subscription.closed) {
      subscription.unsubscribe();
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getBooks/#setBooks =>', () => {
    beforeEach(() => {
      service.setBooks(books);
    });
    it('Should set and update currentBookList (filteredList) value...', () => {
      subscription = service.getBooks().subscribe(
        values => expect(values).toEqual(books)
      );
    });
  });

  describe('#getStoreBooksList/setStoreBooksList =>', () => {
    const expectation = books.concat(books);
    beforeEach(() => {
      service.setStoreBooksList(books.concat(books));
    });
    it('Should set and return a last booksList with all books...', () => {
      subscription = service.getStoreBooksList().subscribe(
        values => expect(values.length).toEqual(expectation.length)
      );
    });
  });

  describe('#setCurrentAndStoreBooks', () => {
    const expectation = books.concat(books);
    beforeEach(() => {
      service.setCurrentAndStoreBooks(books.concat(books));
    });
    it('Should update currentBooksList and booksList last values...', () => {
      subscription = service.getBooks().pipe(
        tap(values => expect(values.length).toBe(expectation.length)),
        switchMap(() => service.getStoreBooksList()),
        tap(values => expect(values.length).toBe(expectation.length))
      ).subscribe();
    });
  });

  describe('#unsubscribe', () => {
    it('Should unsubscribe a subscription...', () => {
      subscription = from([1, 2, 3]).subscribe();
      service.unsubscribe(subscription);
      expect(subscription.closed).toBeTruthy();
    });
  });
});
