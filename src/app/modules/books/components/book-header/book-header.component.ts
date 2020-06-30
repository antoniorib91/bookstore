import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { BookNewComponent } from '../book-new/book-new.component';

@Component({
  selector: 'app-book-header',
  templateUrl: './book-header.component.html',
  styleUrls: ['./book-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookHeaderComponent implements OnInit {

  public hideMobMenu = true;

  constructor(
    private authService: AuthService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {}

  public onClickSignout(event: any) {
    event.preventDefault();
    this.hideMobMenu = !this.hideMobMenu;
    this.authService.doLoggout();
  }

  public onClickAddBook(event: any) {
    event.preventDefault();
    this.hideMobMenu = !this.hideMobMenu;
    this.modalService.show(BookNewComponent);
  }

  public onClickBars() {
    this.hideMobMenu = !this.hideMobMenu;
  }
}
