import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {}

  public onClickSignout(event: any) {
    event.preventDefault();
    this.authService.doLoggout();
  }
}
