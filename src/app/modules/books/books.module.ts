import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { BooksFilterComponent } from './components/books-filter/books-filter.component';
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookHeaderComponent } from './components/book-header/book-header.component';
import { BookNewComponent } from './components/book-new/book-new.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookInfoComponent,
    BooksFilterComponent,
    BookHeaderComponent,
    BookNewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BooksRoutingModule
  ]
})
export class BooksModule { }
