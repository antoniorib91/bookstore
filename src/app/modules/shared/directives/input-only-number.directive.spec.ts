import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputOnlyNumberDirective } from './input-only-number.directive';
import { Component, DebugElement } from '@angular/core';

@Component({
  template: '<input appInputOnlyNumber id="input" [isActive]="isActive" />',
})
class TestComponent {
  public isActive = false;
}

describe('InputOnlyNumberDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugEl: DebugElement;
  const textTest1 = '11159';
  const textTest2 = '11159.62';
  const textTest3 = 'asmdoinenwoenrwbeupas12312ninasncoqw!!@#!$!@#*&#@_)#@';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        InputOnlyNumberDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When isActive is true =>', () => {
    beforeEach(() => {
      component.isActive = true;
      fixture.detectChanges();
    });

    it('Should permit insert number...', () => {
      const el: HTMLInputElement = debugEl.nativeElement.querySelector('#input');
      el.value = textTest1;
      el.dispatchEvent(new Event('input'));
      expect(el.value).toBe(textTest1);
    });

    it('Should permit insert number and dot...', () => {
      const el: HTMLInputElement = debugEl.nativeElement.querySelector('#input');
      el.value = textTest2;
      el.dispatchEvent(new Event('input'));
      expect(el.value).toBe(textTest2);
    });

    it('Should not permit to insert letters and special characters...', () => {
      const el: HTMLInputElement = debugEl.nativeElement.querySelector('#input');
      el.value = textTest3;
      el.dispatchEvent(new Event('input'));
      expect(el.value).toEqual('12312');
    });
  });

  describe('When isActive is false =>', () => {
    beforeEach(() => {
      component.isActive = false;
      fixture.detectChanges();
    });

    it('Should permit all characters...', () => {
      const el: HTMLInputElement = debugEl.nativeElement.querySelector('#input');
      el.value = textTest3;
      el.dispatchEvent(new Event('input'));
      expect(el.value).toEqual(textTest3);
    });
  });
});
