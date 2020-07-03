import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BooksRestService } from '../../service/books-rest.service';
import books from 'src/mocks/books.json';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  const restServiceSpy = jasmine.createSpyObj<BooksRestService>('BooksRestService', ['putBooks']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      providers: [
        BsModalRef,
        { provide: BooksRestService, useValue: restServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    component.book = books[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
