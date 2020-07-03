import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { LoginFormService } from './login-form.service';

describe('LoginFormService', () => {
  let service: LoginFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginFormService,
        FormBuilder
      ],
      imports: [
        ReactiveFormsModule
      ]
    });
    service = TestBed.inject(LoginFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#createFormLogin =>', () => {
    describe('When call the method =>', () => {
      it('Should return a FormGroup...', () => {
        const form = service.createFormLogin();
        expect(form instanceof FormGroup).toBeTruthy();
      });

      it('Should contain a login field...', () => {
        const form: object = service.createFormLogin().value;
        expect(form.hasOwnProperty('login')).toBeTruthy();
      });

      it('Should contain a pass field...', () => {
        const form = service.createFormLogin().value;
        expect(form.hasOwnProperty('pass')).toBeTruthy();
      });
    });
  });

  describe('#isValidForm =>', () => {
    describe('When call a method =>', () => {
      describe('With a valid form =>', () => {
        it('Should return true...', () => {
          const form = service.createFormLogin();
          form.patchValue({ login: '123', pass: '123' });
          expect(service.isValidForm(form)).toBeTruthy();
        });
      });

      describe('With invalid form =>', () => {
        it('Should return false...', () => {
          const form = service.createFormLogin();
          form.setErrors({ required: true});
          expect(service.isValidForm(form)).toBeFalsy();
        });
      });
    });
  });
});
