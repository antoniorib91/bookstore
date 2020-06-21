import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import BooksMock from '../../../../mocks/books.json';

@Injectable({
  providedIn: 'root'
})
export class BooksRestService {

  constructor() { }

  public getBooks(): Observable<Array<Book>> {
    return of(BooksMock);
  }
}
