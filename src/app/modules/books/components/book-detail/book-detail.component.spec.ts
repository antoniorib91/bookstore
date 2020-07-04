import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BooksRestService } from '../../service/books-rest.service';
import books from 'src/mocks/books.json';
import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { BookState } from 'src/app/enums/book-state.enum';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let debugEl: DebugElement;
  const restServiceSpy = jasmine.createSpyObj<BooksRestService>('BooksRestService', ['putBooks']);
  const modalRefSpy = jasmine.createSpyObj<BsModalRef>('BsModalRef', ['hide']);
  const mockBooks = Object.assign({}, books);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      providers: [
        { provide: BsModalRef, useValue: modalRefSpy },
        { provide: BooksRestService, useValue: restServiceSpy }
      ]
    })
    .overrideComponent(BookDetailComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    component.book = mockBooks[0];
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When init the component =>', () => {
    beforeEach(() => {
      component.book = mockBooks[0];
      component.book.state = BookState.available;
      fixture.detectChanges();
    });
    it('Should contains a image of the book...', () => {
      const imgEl = debugEl.queryAll(By.css('.img-fluid.book-detail__image'))[0];
      expect(imgEl.attributes.src).toEqual(books[0].image);
      expect(imgEl.name).toBe('img');
    });

    it('Should contains an title with author names...', () => {
      const titleEl = debugEl.queryAll(By.css('.book-detail__info'))[0].children[0];
      expect(titleEl.name).toBe('h6');
      expect(titleEl.nativeElement.textContent).toBe(books[0].author);
    });

    it('Should contains a books description paragraph...', () => {
      const paragraphEl = debugEl.queryAll(By.css('.book-detail__description'))[0];
      expect(paragraphEl.name).toBe('p');
      expect(paragraphEl.nativeElement.textContent).toEqual(books[0].description);
    });

    it('Should contains a detail box with rent message...', () => {
      const el = debugEl.queryAll(By.css('.book-detail__box'))[0];
      expect(el.nativeElement.textContent).toContain(component.defaultRentMessage);
    });
  });

  describe('#onCloseClick =>', () => {
    it('Should call modalRef hide method...', () => {
      component.onCloseClick();
      expect(modalRefSpy.hide).toHaveBeenCalled();
    });
  });

  describe('#getMoneySymbol =>', () => {
    it('Should return $ symbol...', () => {
      expect(component.getMoneySymbol()).toEqual('$');
    });
  });

  describe('#onClickRent =>', () => {
    beforeEach(() => {
      component.book = mockBooks[0];
      component.book.state = BookState.available;
      restServiceSpy.putBooks.and.callFake(() => of(true));
      component.onClickRent();
      fixture.detectChanges();
    });
    it('Should change the current book state to rented...', () => {
      expect(component.book.state).toEqual(BookState.rented);
    });

    it('Should call BooksRestService putBooks method...', () => {
      expect(restServiceSpy.putBooks).toHaveBeenCalled();
      expect(restServiceSpy.putBooks).toHaveBeenCalledWith(component.book);
    });

    it('Should change detail box to cant rent message...', () => {
      const el = debugEl.queryAll(By.css('.book-detail__box'))[0];
      expect(el.nativeElement.textContent).toContain(component.defaultCantRentMessage);
    });
  });
});
