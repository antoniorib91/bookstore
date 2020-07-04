import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInfoComponent } from './book-info.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import books from 'src/mocks/books.json';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BookInfoComponent', () => {
  let component: BookInfoComponent;
  let fixture: ComponentFixture<BookInfoComponent>;
  let debugEl: DebugElement;
  const mockBook = Object.assign({},  books[0]);
  const modalServiceSpy = jasmine.createSpyObj<BsModalService>('BsModalService', ['show']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInfoComponent ],
      providers: [
        { provide: BsModalService, useValue: modalServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInfoComponent);
    component = fixture.componentInstance;
    component.book = mockBook;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Should create...', () => {
    expect(component).toBeTruthy();
  });

  describe('Whne init the component =>', () => {
    it('Should contains two img...', () => {
      const imagesEl = debugEl.queryAll(By.css('.img-fluid'));
      expect(imagesEl.length).toBe(2);
      expect(imagesEl[0].attributes.src).toEqual(mockBook.image);
      expect(imagesEl[1].attributes.src).toEqual(mockBook.image);
    });

    it('Should have a link with book title as text...', () => {
      const el = debugEl.queryAll(By.css('.book-box'))[0].children[0];
      expect(el.nativeElement.textContent).toContain(mockBook.name);
    });
  });

  describe('#onClickBookName', () => {
    it('Should call modalService show method', () => {
      component.onClickBookName(new Event('onclick'), mockBook);
      expect(modalServiceSpy.show).toHaveBeenCalled();
    });
  });

  describe('#getMoneySymbol =>', () => {
    it('Should return $ symbol...', () => {
      expect(component.getMoneySymbol()).toEqual('$');
    });
  });
});
