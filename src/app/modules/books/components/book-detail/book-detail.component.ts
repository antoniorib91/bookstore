import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { getLocaleCurrencySymbol } from '@angular/common';
import { BookState } from 'src/app/enums/book-state.enum';
import { BooksRestService } from '../../service/books-rest.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailComponent implements OnInit, OnDestroy {

  public book: Book;
  public defaultRentMessage = 'Rent this book';
  public defaultCantRentMessage = 'Sorry, this book is indisponible to rent';

  private subscription: Subscription;

  constructor(
    private modalRef: BsModalRef,
    private restService: BooksRestService
  ) { }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  public onCloseClick() {
    this.modalRef.hide();
  }

  public getMoneySymbol() {
    return getLocaleCurrencySymbol('en-US');
  }

  public onClickRent() {
    this.book.state = BookState.rented;
    this.restService.putBooks(this.book).subscribe(
      res => this.modalRef.hide(),
      err => console.log('Error')
    );
  }

}
