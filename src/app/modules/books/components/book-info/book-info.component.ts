import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { getLocaleCurrencySymbol } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookInfoComponent implements OnInit {

  @Input()
  public book: Book;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {}

  public onClickBookName(event: any, book: Book) {
    event.preventDefault();
    this.modalService.show(BookDetailComponent, { initialState: { book }});
  }

  public getMoneySymbol() {
    return getLocaleCurrencySymbol('en-US');
  }

}
