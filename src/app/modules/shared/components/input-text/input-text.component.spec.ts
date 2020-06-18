import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('When input has a label =>', () => {
    it('Should show the label...', () => {

    });
  });

  describe('When input is text...', () => {
    it('Should be have a type text attribute...', () => {

    });
  });

  describe('When input is password...', () => {
    it('Should be have a type password...', () => {

    });
  });
});
