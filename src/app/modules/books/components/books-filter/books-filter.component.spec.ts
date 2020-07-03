import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFilterComponent } from './books-filter.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('BooksFilterComponent', () => {
  let component: BooksFilterComponent;
  let fixture: ComponentFixture<BooksFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFilterComponent ],
      imports: [
        FormsModule,
        SharedModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onDestroy', () => {
    it('Should clear the subscriptions...', () => {

    });
  });

  describe('When initialize the component', () => {
    it('Should have an app-input-search componenot...', () => {

    });
  });

  describe('When have a filter =>', () => {
    it('Should diplay clear filter link...', () => {

    });
  });

  describe('#handleSearch', () => {
    describe('When have filter values', () => {
      it('Should call booksService setBooks method...', () => {

      });
    });
  });

  describe('#handleSelectFilter', () => {
    it('Should set filter new value...', () => {
    });
    describe('When the filter is different of Available or Rented', () => {
      it('Should mantain input text enabled...', () => {

      });
    });

    describe('When the filter is Available =>', () => {
      it('Should disable input text...', () => {

      });
    });

  });

  describe('#onClickClearFilters', () => {
    it('Should call booksService setBooks method to update books...', () => {

    });

    it('Should call booksFilterService clearFilters method to remove previous filters...', () => {

    });
  });
});
