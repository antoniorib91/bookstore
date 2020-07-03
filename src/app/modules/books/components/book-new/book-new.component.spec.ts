import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewComponent } from './book-new.component';
import { BooksService } from '../../service/books.service';
import { BooksRestService } from '../../service/books-rest.service';
import { BookNewFormService } from '../../service/book-new-form.service';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import books from 'src/mocks/books.json';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;
  const booksServiceSpy = jasmine.createSpyObj<BooksService>('BooksService', ['getStoreBooksList', 'unsubscribe']);
  const booksRestServiceSpy = jasmine.createSpyObj<BooksRestService>('BooksRestService', ['postBooks']);
  const mockBooks: Array<Book> = books;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNewComponent ],
      providers: [
        BsModalRef,
        FormBuilder,
        BookNewFormService,
        { provide: BooksService, useValue: booksServiceSpy },
        { provide: BooksRestService, useValue: booksRestServiceSpy },
      ],
      imports: [
        ModalModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    booksServiceSpy.getStoreBooksList.and.returnValue(new BehaviorSubject<Array<Book>>(mockBooks));
    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create...', () => {
    expect(component).toBeTruthy();
  });
});
