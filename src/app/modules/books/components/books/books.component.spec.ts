import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BookHeaderComponent } from '../book-header/book-header.component';
import { BookListComponent } from '../book-list/book-list.component';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When initialize the component =>', () => {
    it('Should have a app-book-header component...', () => {
      const el = debugEl.children[0].children[0];
      expect(el.name).toBe('app-book-header');
    });

    it('Should have a app-book-list component...', () => {
      const el = debugEl.children[1].children[0];
      expect(el.name).toBe('app-book-list');
    });
  });
});
