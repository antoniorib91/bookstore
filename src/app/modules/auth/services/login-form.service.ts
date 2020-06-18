import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class LoginFormService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public createFormLogin(): FormGroup {
    return this.formBuilder.group({
      login: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  public isValidForm(form: FormGroup) {
    return form.valid;
  }
}
