import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInfoComponent } from './book-info.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import books from 'src/mocks/books.json';

describe('BookInfoComponent', () => {
  let component: BookInfoComponent;
  let fixture: ComponentFixture<BookInfoComponent>;
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
    component.book = books[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
