import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.all());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When type is submit =>', () => {
    beforeEach(() => {
      component.type = 'submit';
      fixture.detectChanges();
    });
    it('Should have the attribute submit...', () => {
      expect(el.attributes).toContain('submit');
    });
  });

  describe('When type is button =>', () => {
    beforeEach(() => {
      component.type = 'button';
      fixture.detectChanges();
    });
    it('Should have the attribute submit...', () => {
      expect(el.attributes).toContain('button');
    });
  });

  describe('When color is Blue =>', () => {
    it('Should have the class Blue in the component...', () => {

    });
  });

  describe('When color is Gray =>', () => {
    it('Should have the class gray in the component...', () => {

    });
  });

  describe('When size is normal =>', () => {
    it('Should have the class normal in the component...', () => {

    });
  });

  describe('When size is auto =>', () => {
    it('Should hace the class auto in the component...', () => {

    });
  });
});
