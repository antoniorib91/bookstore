import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { LoginFormService } from '../../services/login-form.service';
import { AuthService } from '../../services/auth.service';
import { DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InputTextComponent } from 'src/app/modules/shared/components/input-text/input-text.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let service: LoginFormService;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<LoginFormComponent>;
  const authServiceSpy = jasmine.createSpyObj<AuthService>('AuthService', ['doLogin']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      providers: [
        LoginFormService,
        FormBuilder,
        { provide: AuthService, useValue: authServiceSpy }
      ],
      imports: [
        SharedModule,
        ReactiveFormsModule
      ],
    })
    .overrideComponent(LoginFormComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    service = TestBed.inject(LoginFormService);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should contains two app-input-text...', () => {
    const elInputs = debugEl.queryAll(By.directive(InputTextComponent));
    expect(elInputs.length).toBe(2);
    expect(elInputs[0].attributes.formControlName).not.toBeNull();
    expect(elInputs[0].attributes.formControlName).toEqual('login');
    expect(elInputs[1].attributes.formControlName).not.toBeNull();
    expect(elInputs[1].attributes.formControlName).toEqual('pass');
  });

  it('Should contians an h3 title...', () => {
    const elTitle = debugEl.queryAll(By.css('.spaced.text-center'))[0];
    expect(elTitle.name).toEqual('h3');
    expect(elTitle.nativeElement.textContent).toEqual('Bem vindo a Bookstore!');
  });

  describe('#onClickLogar =>', () => {
    describe('With valid form values =>', () => {
      beforeEach(() => {
        spyOn(service, 'isValidForm').and.returnValue(true);
        component.form.patchValue(
          { login: '123', pass: '123' }
        );
        component.onClickLogar();
        fixture.detectChanges();
      });
      it('Should call service isValid method...', () => {
        expect(service.isValidForm).toHaveBeenCalled();
        expect(service.isValidForm).toHaveBeenCalledWith(component.form);
      });

      it('Should call AuthService "doLogin" method...', () => {
        expect(authServiceSpy.doLogin).toHaveBeenCalled();
      });

      it('Should set "submitted" to true...', () => {
        expect(component.submitted).toBeTruthy();
      });
    });

    describe('And "no" values are inserted in the form =>', () => {
      beforeEach(() => {
        spyOn(service, 'isValidForm').and.returnValue(false);
        component.onClickLogar();
        fixture.detectChanges();
      });
      it('Should display an error message on login field...', () => {
        const elError = debugEl.queryAll(By.directive(InputTextComponent))[0].children[2];
        expect(elError).not.toBeNull();
        expect(elError).not.toBeUndefined();
        expect(elError.nativeElement.textContent).toContain('Campo Obrigatório');
      });

      it('Should display an error message on pass field', () => {
        const elError = debugEl.queryAll(By.directive(InputTextComponent))[1].children[2];
        expect(elError).not.toBeNull();
        expect(elError).not.toBeUndefined();
        expect(elError.nativeElement.textContent).toContain('Campo Obrigatório');
      });
    });
  });

});
