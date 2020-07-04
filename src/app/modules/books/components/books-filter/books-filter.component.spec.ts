import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFilterComponent } from './books-filter.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InputSearchComponent } from 'src/app/modules/shared/components/input-search/input-search.component';
import { BooksService } from '../../service/books.service';
import { BooksFilterService } from '../../service/books-filter.service';
import books from 'src/mocks/books.json';
import { Book } from 'src/app/models/book.model';
import { BehaviorSubject } from 'rxjs';

describe('BooksFilterComponent', () => {
  let component: BooksFilterComponent;
  let fixture: ComponentFixture<BooksFilterComponent>;
  let debugEl: DebugElement;

  const bookServiceSpy = jasmine.createSpyObj<BooksService>(
    'BookService', ['getBooks', 'getStoreBooksList', 'setBooks', 'setStoreBooksList', 'unsubscribe']
  );
  const mockBooks: Array<Book> = Object.assign([], books);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFilterComponent ],
      providers: [
        { provide: BooksService, useValue: bookServiceSpy},
      ],
      imports: [
        FormsModule,
        SharedModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    bookServiceSpy.getStoreBooksList.and.returnValue(new BehaviorSubject(mockBooks));
    fixture = TestBed.createComponent(BooksFilterComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onDestroy', () => {
    it('Should call service unsubscribe to clear the subscriptions...', () => {
      component.ngOnDestroy();
      expect(bookServiceSpy.unsubscribe).toHaveBeenCalled();
    });
  });

  describe('When initialize the component', () => {
    it('Should have an app-input-search componenot...', () => {
      const el = debugEl.queryAll(By.directive(InputSearchComponent))[0];
      expect(el.name).toBe('app-input-search');
    });
  });

  describe('When have a filter =>', () => {
    it('Should display clear filter link...', () => {
      component.hasFilter = true;
      fixture.detectChanges();
      const el = debugEl.children[0].children[1].children[0];
      expect(el).not.toBeNull();
      expect(el.name).toBe('a');
    });
  });

  describe('#handleSearch', () => {
    describe('When have filter values', () => {
      it('Should call booksService setBooks method...', () => {
        component.filter = 'Author';
        component.search = 'teste';
        component.handleSearch();
        expect(bookServiceSpy.setBooks).toHaveBeenCalled();
      });
    });
  });

  describe('#handleSelectFilter', () => {
    it('Should set filter new value...', () => {
      component.handleSelectFilter('Author');
      expect(component.filter).toEqual('Author');
    });
  });

});
