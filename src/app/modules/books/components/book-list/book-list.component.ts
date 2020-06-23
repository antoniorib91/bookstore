import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BooksRestService } from '../../service/books-rest.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit, OnDestroy {

  public books: Observable<Array<Book>>;

  private subscription: Subscription;

  constructor(
    private restService: BooksRestService
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  ngOnDestroy() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  public onClickMoreBooks() {
    this.books = this.books.pipe(
      switchMap(res => this.restService.getBooks().pipe(
        switchMap(res2 => of(res.concat(res2)))
      ))
    );
  }

  private loadBooks() {
    this.books = this.restService.getBooks();
  }

}
