import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksFilterService } from '../../service/books-filter.service';
import { BooksService } from '../../service/books.service';
import { Book } from 'src/app/models/book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books-filter',
  templateUrl: './books-filter.component.html',
  styleUrls: ['./books-filter.component.scss'],
})
export class BooksFilterComponent implements OnInit, OnDestroy {

  public search = '';
  public hasFilter = false;
  public filter: string;
  public disableInput: boolean;
  public storeBooks: Array<Book>;
  public dropdownOptions: Array<string>;
  private subscription: Subscription;

  constructor(
    private service: BooksService,
    private filterService: BooksFilterService
  ) {}

  ngOnInit(): void {
    this.initDropdown();
    this.getStoreBooksSubscription();
  }

  ngOnDestroy(): void {
    this.service.unsubscribe(this.subscription);
  }

  public handleSearch(): void {
    if (this.canSearch()) {
      this.hasFilter = true;
      this.service.setBooks(this.filterService.filterBooks(this.storeBooks, this.filter, this.search));
    }
  }

  public handleSelectFilter(value: string): void {
    this.filter = value;
    this.disableInputWhenIsBookStateFilter();
  }

  public onClickClearFilters() {
    this.hasFilter = false;
    this.filterService.clearFilters();
    this.search = '';
    this.service.setBooks(this.storeBooks);
  }

  private disableInputWhenIsBookStateFilter(): void {
    this.disableInput = this.isNotTextFilter() ? true : false;
  }

  private canSearch() {
    if ((this.isSearchTextFilter() && this.search.length >= 2) || this.isNotTextFilter()) {
      return true;
    }
    return false;
  }

  private isNotTextFilter() {
    return this.filter && (this.filter === 'Available' || this.filter === 'Rented');
  }

  private isSearchTextFilter() {
    return this.filter && (this.filter !== 'Available' && this.filter !== 'Rented')
  }

  private getStoreBooksSubscription(): void {
    this.service.getStoreBooksList().subscribe(
      books => this.storeBooks = books,
      err => console.log(err)
    );
  }

  private initDropdown(): void {
    this.dropdownOptions = this.filterService.getFiltersOptions();
  }

}
