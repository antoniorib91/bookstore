import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginFormService } from '../../services/login-form.service';
import { AuthService } from '../../services/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  public form: FormGroup;
  public submitted = false;

  constructor(
    private service: LoginFormService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.form = this.service.createFormLogin();
  }

  get login() {
    return this.form.get('login');
  }

  get pass() {
    return this.form.get('pass');
  }

  public onClickLogar(): void {
    this.submitted = true;
    if (this.service.isValidForm(this.form)) {
      this.authService.doLogin();
    }
    return;
  }



}
