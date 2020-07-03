import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';
import { DebugElement } from '@angular/core';
import { InputOnlyNumberDirective } from '../../directives/input-only-number.directive';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<InputTextComponent>;
  let el: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputTextComponent,
        InputOnlyNumberDirective
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    el = fixture.nativeElement.querySelector('input');
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When component has prop inputName =>', () => {
    beforeEach(() => {
      component.inputName = 'custom-input';
      fixture.detectChanges();
    });
    it('Should render input with attribue name using inputName value...', () => {
      expect(el.getAttribute('name')).toEqual('custom-input');
    });
  });

  describe('When component has prop inputId =>', () => {
    beforeEach(() => {
      component.inputId = 'custom-id';
      fixture.detectChanges();
    });
    it('Should render input with attribute id usinge inputId value...', () => {
      expect(el.getAttribute('id')).toEqual('custom-id');
    });
  });

  describe('When component has prop onlyNumber =>', () => {
    describe('And the value is true =>', () => {
      beforeEach(() => {
        component.onlyNumber = true;
        fixture.detectChanges();
      });

      it('Should render input with attribute isActive with onlyNumber...', () => {
        fixture.detectChanges();
        expect(el.getAttribute('ng-reflect-is-active')).toEqual('true');
      });

      it('Should not permit text or special characters on value...', () => {
        el.value = 'sadoaksdpkkapowq1234';
        el.dispatchEvent(new Event('input'));
        expect(el.value).toEqual('1234');
      });
    });

    describe('And the value is false', () => {
      beforeEach(() => {
        component.onlyNumber = false;
        fixture.detectChanges();
      });

      it('Should render input with attribute isActive with onlyNumber value...', () => {
        expect(el.getAttribute('ng-reflect-is-active')).toEqual('false');
      });
    });
  });


  describe('When input has a label =>', () => {
    beforeEach(() => {
      component.label = 'Hello';
      fixture.detectChanges();
    });
    it('Should show the label...', () => {
      const elContent = debugEl.nativeElement as HTMLDivElement;
      const subject = elContent.querySelector('label');
      expect(subject).not.toBeNull();
      expect(subject.textContent).toEqual('Hello');
    });
  });
  describe('When component prop type =>', () => {
    describe('And input is text... =>', () => {
      beforeEach(() => {
        component.type = 'text';
        fixture.detectChanges();
      });
      it('Should be have a type text attribute...', () => {
        expect(el.getAttribute('type')).toEqual('text');
      });
    });

    describe('And input is password =>', () => {
      beforeEach(() => {
        component.type = 'password';
        fixture.detectChanges();
      });
      it('Should be have a type password...', () => {
        expect(el.getAttribute('type')).toEqual('password');
      });
    });
  });

  describe('#onInput', () => {
    describe('When call the method =>', () => {
      it('Should change the value...', () => {
        el.dispatchEvent(new Event('input'));
        component.onInput({ target: { value: 'hello'}});
        fixture.detectChanges();
        expect(el.value).toEqual('hello');
      });
    });
  });

});
