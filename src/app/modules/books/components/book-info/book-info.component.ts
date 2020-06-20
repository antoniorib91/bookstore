import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { getLocaleCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookInfoComponent implements OnInit {

  @Input()
  public book: Book;

  constructor() { }

  ngOnInit(): void {}

  public onClickBookName(event: any, id: string) {
    event.preventDefault();
    console.log(id);
  }

  public getMoneySymbol() {
    return getLocaleCurrencySymbol('en-US');
  }

}
