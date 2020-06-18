import { FormBuilder } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { LoginFormService } from './login-form.service';

describe('LoginFormService', () => {
  let service: LoginFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#createFormLogin', () => {

    describe('When call the method =>', () => {
      it('Should return a FormGroup...', () => {

      });
    });
  });

  describe('#isValidForm', () => {
    describe('When call a method =>', () => {
      describe('With a valid form =>', () => {
        it('Should return true...', () => {

        });
      });

      describe('With invalid form =>', () => {
        it('Should return false...', () => {

        });
      });
    });
  });
});
