import { Injectable } from '@angular/core';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private bookList = new BehaviorSubject<Array<Book>>([])
  private currentBookList = new BehaviorSubject<Array<Book>>([]);

  constructor() {}

  public getBooks() {
    return this.currentBookList;
  }

  public setBooks(value: Array<Book>) {
    this.currentBookList.next(value);
  }

  public getStoreBooksList() {
    return this.bookList;
  }

  public setCurrentAndStoreBooks(value: Array<Book>) {
    this.currentBookList.next(value);
    this.bookList.next(value);
  }

  public setStoreBooksList(value: Array<Book>) {
    this.bookList.next(value);
  }

  public unsubscribe(subscription: Subscription) {
    if (subscription && !subscription.closed) {
      subscription.unsubscribe();
    }
  }

}
