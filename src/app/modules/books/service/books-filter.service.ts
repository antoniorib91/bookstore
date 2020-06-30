import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookState } from 'src/app/enums/book-state.enum';

@Injectable({
  providedIn: 'root'
})
export class BooksFilterService {

  public hasFilter = false;
  public lastSearch: string;
  public lastFilter: string;

  constructor() {}

  public filterBooks(books: Array<Book>, filter: string, search: string) {
    this.lastFilter = filter;
    this.lastSearch = search;
    this.hasFilter = true;
    return this.filtersMethods(books, search).find(f => f.filter === filter).method;
  }

  public filterWithLastFilters(books: Array<Book>) {
    if (this.hasFilter) {
      return this.filterBooks(books, this.lastFilter, this.lastSearch);
    }
    return books;
  }

  public filterBooksByAuthor(books: Array<Book>, value: string) {
    return books.filter(b => b.author.trim().toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()));
  }

  public filterBooksByTitle(books: Array<Book>, value: string) {
    return books.filter(b => b.name.trim().toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()));
  }

  public filterBooksByMinPrice(books: Array<Book>, value: string) {
    const minPrice = Number.parseFloat(value);
    return books.filter(b => b.price >= minPrice);
  }

  public filterBooksByMaxPrice(books: Array<Book>, value: string) {
    const maxPrice = Number.parseFloat(value);
    return books.filter(b => b.price <= maxPrice);
  }

  public filterBooksByAvailable(books: Array<Book>, value: string) {
    return books.filter(b => b.state === BookState.available);
  }

  public filterBooksByRented(books: Array<Book>, value: string) {
    return books.filter(b => b.state === BookState.rented);
  }

  public clearFilters() {
    this.lastSearch = null;
    this.lastFilter = null;
    this.hasFilter = false;
  }

  public getFiltersOptions() {
    return ['Author', 'Title', 'Max Price', 'Minimal Price', 'Available', 'Rented'];
  }

  private filtersMethods(books, search: string) {
    return [
      {
        filter: 'Author',
        method: this.filterBooksByAuthor(books, search)
      },
      {
        filter: 'Title',
        method: this.filterBooksByTitle(books, search)
      },
      {
        filter: 'Max Price',
        method: this.filterBooksByMaxPrice(books, search)
      },
      {
        filter: 'Minimal Price',
        method: this.filterBooksByMinPrice(books, search)
      },
      {
        filter: 'Available',
        method: this.filterBooksByAvailable(books, search)
      },
      {
        filter: 'Rented',
        method: this.filterBooksByRented(books, search)
      }
    ];
  }

}
