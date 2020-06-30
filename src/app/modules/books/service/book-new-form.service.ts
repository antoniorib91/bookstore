import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookState } from 'src/app/enums/book-state.enum';

@Injectable({
  providedIn: 'root'
})
export class BookNewFormService {

  constructor(
    private fb: FormBuilder
  ) { }

  public isValidForm(form: FormGroup) {
    return form.valid && !form.errors;
  }

  public createForm() {
    return this.fb.group({
      id: [this.generateRandomId()],
      name: ['', Validators.required],
      price: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      state: [BookState.available]
    });
  }

  public generateRandomId() {
    return Math.random().toString(36).substr(2, 5);
  }
}
