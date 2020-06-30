import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Subscription } from 'rxjs';
import { BooksRestService } from '../../service/books-rest.service';
import { BooksService } from '../../service/books.service';
import { BooksFilterService } from '../../service/books-filter.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {

  public books: Array<Book> = [];
  public storeBooks: Array<Book> = [];


  private subscription: Subscription;
  private bookSubscription: Subscription;
  private storeBookSubscription: Subscription;

  constructor(
    private service: BooksService,
    private restService: BooksRestService,
    private filterService: BooksFilterService
  ) { }

  ngOnInit(): void {
    this.getBooks();
    this.getBooksSubscription();
    this.getStoreBooksSubscription();
  }

  ngOnDestroy() {
    this.service.unsubscribe(this.subscription);
    this.service.unsubscribe(this.bookSubscription);
    this.service.unsubscribe(this.storeBookSubscription);
  }

  public onClickMoreBooks() {
    this.getBooks();
  }

  private getBooks() {
    this.restService.getBooks().subscribe(
      res => this.handleResponseSuccess(res),
      err => this.handleResponseError(err)
    );
  }

  private getBooksSubscription() {
    this.bookSubscription = this.service.getBooks().subscribe(
      books => this.books = books,
      err => console.log(err)
    );
  }

  private getStoreBooksSubscription() {
    this.storeBookSubscription = this.service.getStoreBooksList().subscribe(
      books => this.storeBooks = books,
      err => console.log(err)
    );
  }

  private handleResponseSuccess(response: Array<Book>) {
    if (this.storeBooks) {
      this.service.setBooks(this.filterService.filterWithLastFilters(this.books.concat(response)));
      this.service.setStoreBooksList(this.storeBooks.concat(response));
    } else {
      this.service.setStoreBooksList(response);
    }
  }

  private handleResponseError(err: any) {
    console.log(err);
  }

}
