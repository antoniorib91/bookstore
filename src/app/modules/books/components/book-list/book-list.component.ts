import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Observable } from 'rxjs';
import { BooksRestService } from '../../service/books-rest.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {

  public books: Observable<Array<Book>>;

  constructor(
    private restService: BooksRestService
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  private loadBooks() {
    this.books = this.restService.getBooks();
  }

}
