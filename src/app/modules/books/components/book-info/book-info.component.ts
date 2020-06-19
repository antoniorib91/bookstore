import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';

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

}
