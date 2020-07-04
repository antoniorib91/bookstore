import { TestBed } from '@angular/core/testing';

import { BookNewFormService } from './book-new-form.service';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BookState } from 'src/app/enums/book-state.enum';

describe('BookNewFormService', () => {
  let service: BookNewFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookNewFormService,
        FormBuilder
      ],
      imports: [
        ReactiveFormsModule
      ]
    });
    service = TestBed.inject(BookNewFormService);
  });

  it('should be created...', () => {
    expect(service).toBeTruthy();
  });

  describe('#createFormLogin =>', () => {
    describe('When call the method =>', () => {
      it('Should return a FormGroup...', () => {
        const form = service.createForm();
        expect(form instanceof FormGroup).toBeTruthy();
      });

      it('Should contain a id field...', () => {
        const form: object = service.createForm().value;
        expect(form.hasOwnProperty('id')).toBeTruthy();
      });

      it('Should contain a name field...', () => {
        const form = service.createForm().value;
        expect(form.hasOwnProperty('name')).toBeTruthy();
      });

      it('Should contain a price field...', () => {
        const form = service.createForm().value;
        expect(form.hasOwnProperty('price')).toBeTruthy();
      });

      it('Should contain a author field...', () => {
        const form = service.createForm().value;
        expect(form.hasOwnProperty('author')).toBeTruthy();
      });

      it('Should contain a description field...', () => {
        const form = service.createForm().value;
        expect(form.hasOwnProperty('description')).toBeTruthy();
      });

      it('Should contain a image field...', () => {
        const form = service.createForm().value;
        expect(form.hasOwnProperty('image')).toBeTruthy();
      });

      it('Should contain a state field...', () => {
        const form = service.createForm().value;
        expect(form.hasOwnProperty('state')).toBeTruthy();
      });
    });
  });

  describe('#isValidForm =>', () => {
    describe('When call a method =>', () => {
      describe('With a valid form =>', () => {
        it('Should return true...', () => {
          const form = service.createForm();
          form.patchValue({
            id: '123',
            name: 'test1',
            price: '5.50',
            author: 'John Snow',
            description: 'Test1',
            image: 'http://www.google.com.br',
            state: BookState.available
          });
          expect(service.isValidForm(form)).toBeTruthy();
        });
      });

      describe('With invalid form =>', () => {
        it('Should return false...', () => {
          const form = service.createForm();
          form.setErrors({ required: true});
          expect(service.isValidForm(form)).toBeFalsy();
        });
      });
    });
  });

  describe('#generateRandomId =>', () => {
    it('Should return an string...', () => {
      expect(typeof service.generateRandomId()).toBe('string');
    });
  });
});
