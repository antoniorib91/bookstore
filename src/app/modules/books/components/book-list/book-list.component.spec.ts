import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { BookInfoComponent } from '../book-info/book-info.component';
import { BooksService } from '../../service/books.service';
import { BooksRestService } from '../../service/books-rest.service';
import { BooksFilterService } from '../../service/books-filter.service';
import { of, BehaviorSubject } from 'rxjs';
import books from 'src/mocks/books.json';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/app/modules/shared/shared.module';


describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  const bookServiceSpy = jasmine.createSpyObj<BooksService>(
    'BookService', ['getBooks', 'getStoreBooksList', 'setBooks', 'setStoreBooksList', 'unsubscribe']
  );
  const bookFilterServiceSpy = jasmine.createSpyObj<BooksFilterService>('BooksFilterService', ['filterWithLastFilters']);
  const booksRestServiceSpy = jasmine.createSpyObj<BooksRestService>('BooksRestService', ['getBooks']);
  const modalServiceSpy = jasmine.createSpyObj<BsModalService>('BsModalService', ['show']);
  const mockBooks = books;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListComponent, BookInfoComponent ],
      providers: [
        { provide: BooksService, useValue: bookServiceSpy},
        { provide: BooksRestService, useValue: booksRestServiceSpy },
        { provide: BooksFilterService, useValue: bookFilterServiceSpy },
        { provide: BsModalService, useValue: modalServiceSpy }
      ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    booksRestServiceSpy.getBooks.and.returnValue(of(mockBooks));
    bookServiceSpy.getBooks.and.returnValue(new BehaviorSubject(mockBooks));
    bookServiceSpy.getStoreBooksList.and.returnValue(new BehaviorSubject(mockBooks));

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
