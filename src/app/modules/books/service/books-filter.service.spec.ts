import { TestBed } from '@angular/core/testing';

import { BooksFilterService } from './books-filter.service';

import books from 'src/mocks/books.json';

describe('BooksFilterService', () => {
  let service: BooksFilterService;
  const mock1 = Object.assign({}, books[0]);
  const mock2 = Object.assign({}, books[1]);
  const mockBooks = [mock1, mock2];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksFilterService);
  });

  it('should be created...', () => {
    expect(service).toBeTruthy();
  });

  describe('#getFiltersOptions =>', () => {
    it('Should return six filters...', () => {
      expect(service.getFiltersOptions().length).toBe(6);
    });
  });

  describe('#clearFilters =>', () => {
    beforeEach(() => {
      service.hasFilter = true;
      service.lastFilter = 'Author';
      service.lastSearch = 'JK Rolling';
      service.clearFilters();
    });
    it('Should set hasFilter to false...', () => {
      expect(service.hasFilter).toBeFalsy();
    });

    it('Should set lastSearh and lastFilter to null...', () => {
      expect(service.lastFilter).toBeNull();
      expect(service.lastSearch).toBeNull();
    });
  });


  describe('#filterBooks =>', () => {
    beforeEach(() => {
      service.lastSearch = 'Test';
    });

    describe('When filter is Author =>', () => {
      beforeEach(() => {
        service.lastFilter = 'Author';
      });
      it('Should call filterBooksByAuthor method...', () => {
        spyOn(service, 'filterBooksByAuthor');
        service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(service.filterBooksByAuthor).toHaveBeenCalled();
      });

      it('Should return filtered books...', () => {
        service.lastSearch = 'Amelia Hepworth';
        const subject = service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(subject.length).toBe(1);
        expect(subject).toEqual([mockBooks[0]]);
      });
    });

    describe('When filter is Title =>', () => {
      beforeEach(() => {
        service.lastFilter = 'Title';
        service.lastSearch = 'I Love You to';
      });
      it('Should call filterBooksByTitle method...', () => {
        spyOn(service, 'filterBooksByTitle');
        service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(service.filterBooksByTitle).toHaveBeenCalled();
      });
      it('Should return filtered books...', () => {
        const subject = service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(subject.length).toBe(1);
        expect(subject).toEqual([mockBooks[1]]);
      });

    });

    describe('When filter is Max Price =>', () => {
      beforeEach(() => {
        service.lastFilter = 'Max Price';
        service.lastSearch = '6';
      });
      it('Should call filterBooksByMaxPrice method...', () => {
        spyOn(service, 'filterBooksByMaxPrice');
        service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(service.filterBooksByMaxPrice).toHaveBeenCalled();
      });
      it('Should return filtered books...', () => {
        const subject = service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(subject.length).toBe(1);
        expect(subject).toEqual([mockBooks[1]]);
      });
    });

    describe('When filter is Minimal Price =>', () => {
      beforeEach(() => {
        service.lastFilter = 'Minimal Price';
        service.lastSearch = '7';
      });
      it('Should call filterBooksByMinPrice method...', () => {
        spyOn(service, 'filterBooksByMinPrice');
        service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(service.filterBooksByMinPrice).toHaveBeenCalled();
      });
      it('Should return filtered books...', () => {
        const subject = service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(subject.length).toBe(1);
        expect(subject).toEqual([mockBooks[0]]);
      });
    });

    describe('When filter is Available =>', () => {
      beforeEach(() => {
        service.lastFilter = 'Available';
      });
      it('Should call filterBooksByAvailable method...', () => {
        spyOn(service, 'filterBooksByAvailable');
        service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(service.filterBooksByAvailable).toHaveBeenCalled();
      });
      it('Should return filtered books...', () => {
        const subject = service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(subject.length).toBe(2);
        expect(subject).toEqual([mockBooks[0], mockBooks[1]]);
      });
    });

    describe('When filter is Rented =>', () => {
      beforeEach(() => {
        service.lastFilter = 'Rented';
      });
      it('Should call filterBooksByRented method...', () => {
        spyOn(service, 'filterBooksByRented');
        service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(service.filterBooksByRented).toHaveBeenCalled();
      });
      it('Should return filtered books...', () => {
        const subject = service.filterBooks(mockBooks, service.lastFilter, service.lastSearch);
        expect(subject.length).toBe(0);
        expect(subject).toEqual([]);
      });
    });

  });
});
