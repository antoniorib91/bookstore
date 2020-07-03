import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchComponent } from './input-search.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;
  let debugEl: DebugElement;
  let elInput: DebugElement;
  let elDrop: DebugElement;
  let elBtn: DebugElement;
  let elBtnDrop: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    elDrop = debugEl.query(By.css('.input-group-prepend'));
    elBtnDrop = debugEl.query(By.css('.btn.btn-outline-secondary.dropdown-toggle'));
    elBtn = debugEl.query(By.css('.btn.btn-outline-dark'));
    elInput = debugEl.query(By.css('.form-control.input'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When has prop dropdownLabel =>', () => {
    it('Should show dropdown label on button...', () => {
      component.dropdownLabel = 'filter';
      fixture.detectChanges();
      expect(elBtnDrop.nativeElement.textContent).toEqual(' filter ');
    });
  });

  describe('When component has prop inputName =>', () => {
    beforeEach(() => {
      component.inputName = 'custom-input';
      fixture.detectChanges();
    });
    it('Should render input with attribue name using inputName value...', () => {
      expect(elInput.attributes.name).toEqual('custom-input');
    });
  });

  describe('When component has prop inputId =>', () => {
    beforeEach(() => {
      component.inputId = 'custom-id';
      fixture.detectChanges();
    });
    it('Should render input with attribute id usinge inputId value...', () => {
      expect(elInput.attributes.id).toEqual('custom-id');
    });
  });

  describe('#onClickSearch', () => {
    describe('When call the method =>', () => {
      it('Should call onsearc "emit" method...', () => {
        spyOn(component.onsearch, 'emit');
        component.onClickSearch();
        expect(component.onsearch.emit).toHaveBeenCalled();
      });
    });
  });

  describe('#onClickDropdown', () => {
    describe('When call the method =>', () => {
      it('Should change hideDropdown variable...', () => {
        const previousState = component.hideDropdown;
        component.onClickDropdown();
        expect(component.hideDropdown).not.toBe(previousState);
      });
    });
  });

  describe('#onClickOptions', () => {
    describe('When call the method =>', () => {
      describe('And selected is not null =>', () => {
        beforeEach(() => {
          component.dropdownOptions = ['teste1', 'teste2'];
          component.selected = 'teste1';
        });
        describe('Then selected value is different of param informed =>', () => {
          it('Should set selected with new value...', () => {
            component.onClickOptions('teste2');
            expect(component.selected).toEqual('teste2');
          });
        });

        describe('Then selected value is equal the param informed =>', () => {
          it('Should clear selected value to null...', () => {
            component.onClickOptions('teste1');
            expect(component.selected).toBeNull();
          });
        });
      });

      it('Should change hideDropdown variable...', () => {
        const previousState = component.hideDropdown;
        component.onClickOptions('teste2');
        expect(component.hideDropdown).not.toEqual(previousState);
      });
      it('Should call onselect "emit" method...', () => {
        spyOn(component.onselect, 'emit');
        component.onClickOptions('teste1');
        expect(component.onselect.emit).toHaveBeenCalled();
      });
    });
  });

  describe('#onInput', () => {
    describe('When call the method =>', () => {
      it('Should update input value', () => {
        const previousValue = component.value;
        component.onInput({ target: { value: 'hello teste' }});
        expect(component.value).not.toEqual(previousValue);
      });
    });
  });

  describe('#isDisabled', () => {
    describe('When call the method =>', () => {
      describe('And disabled is true =>', () => {
        beforeEach(() => {
          component.disabled = true;
        });
        it('Should return "" to disable the component input...', () => {
          expect(component.isDisabled()).toBe('');
        });
      });
      describe('And disabled is false =>', () => {
        it('Should return null to mantain input enabled...', () => {
          expect(component.isDisabled()).toBeNull();
        });
      });
    });
  });

  describe('#isSelected', () => {
    describe('When selected was equal param informed =>', () => {
      beforeEach(() => {
        component.dropdownOptions = ['teste1', 'teste2'];
        component.selected = 'teste1';
        component.hideDropdown = false;
        fixture.detectChanges();
      });
      it('Should return "selected" string...', () => {
        expect(component.isSelected('teste1')).toBe('selected');
      });
      it('Should render "selected" class on selected option...', () => {
        const elDropdownOptions = elDrop.children[1].children;
        const elDebug = elDropdownOptions.filter(el => el.classes.hasOwnProperty('selected'));
        const elSelected = elDebug[0].nativeElement as HTMLLinkElement;
        expect(elDebug.length).toBe(1);
        expect(elSelected.classList).toContain('selected');
        expect(elSelected.textContent).toEqual('teste1');
      });
    });

    describe('When selected was diffent from params', () => {
      it('Should return "" string to not apply css...', () => {
        component.selected = 'teste1';
        expect(component.isSelected('teste2')).toBe('');
      });
    });
  });
});
