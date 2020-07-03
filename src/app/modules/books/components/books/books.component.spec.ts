import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When initialize the component =>', () => {
    it('Should have a app-book-header component...', () => {

    });

    it('Should have a app-book-list component...', () => {

    });
  });
});
