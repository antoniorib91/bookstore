import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginFormService } from '../../services/login-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  public form: any;
  public submitted = false;

  constructor(
    private router: Router,
    private service: LoginFormService,
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
      this.authenticate();
    }
    return;
  }

  private authenticate(): void {
    this.router.navigate(['/books']);
  }

}
