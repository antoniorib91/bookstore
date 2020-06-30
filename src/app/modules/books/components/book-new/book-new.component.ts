import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookState } from 'src/app/enums/book-state.enum';
import { BooksService } from '../../service/books.service';
import { Book } from 'src/app/models/book.model';
import { Subscription } from 'rxjs';
import { BooksRestService } from '../../service/books-rest.service';
import { BookNewFormService } from '../../service/book-new-form.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookNewComponent implements OnInit, OnDestroy {

  public imgUrl = '';
  public submitted = false;
  public hasError = false;
  public form: FormGroup;
  private storeBooks: Array<Book>;
  private subscription: Subscription;
  private storeBooksSubscription: Subscription;

  constructor(
    private modalRef: BsModalRef,
    private service: BooksService,
    private restService: BooksRestService,
    private formService: BookNewFormService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getStoreBooksSubscription();
  }

  ngOnDestroy() {
    this.service.unsubscribe(this.subscription);
    this.service.unsubscribe(this.storeBooksSubscription);
  }

  public onCloseClick() {
    this.modalRef.hide();
  }

  public showRequiredErrors(ctrlName: string) {
    return this.submitted && this.form.get(ctrlName).errors?.required;
  }

  public submitForm() {
    this.submitted = true;
    this.hasError = false;
    if (this.formService.isValidForm(this.form)) {
      this.postBook();
    }
  }

  public handleImageChange(value: any) {
    this.imgUrl = value.target.value;
  }

  private handleResponseSuccess(res) {
    this.storeBooks.push(this.form.value);
    this.service.setCurrentAndStoreBooks(this.storeBooks);
    this.modalRef.hide();
  }

  private handleResponseError(err) {
    console.log(err);
    this.hasError = true;
  }

  private postBook() {
    this.subscription = this.restService.postBooks(this.form.value).subscribe(
      res => this.handleResponseSuccess(res),
      err => this.handleResponseError(err)
    );
  }

  private getStoreBooksSubscription() {
    this.storeBooksSubscription = this.service.getStoreBooksList().subscribe(
      books => this.storeBooks = books,
      err => console.log(err)
    );
  }

  private createForm() {
    this.form = this.formService.createForm();
  }

}
