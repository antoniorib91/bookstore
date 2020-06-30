import { Component, OnInit, forwardRef, Input, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSearchComponent),
      multi: true
    }
  ]
})
export class InputSearchComponent implements OnInit, ControlValueAccessor {

  @Input()
  public inputName: string;

  @Input()
  public inputId: string;

  @Input()
  public placeholder = '';

  @Input()
  public disabled: boolean;

  @Input()
  public dropdownLabel: string;

  @Input()
  public dropdownOptions: Array<string>;

  @Input()
  public disableOnlyInput = false;

  @Output()
  public onselect: EventEmitter<string> = new EventEmitter();

  @Output()
  public onsearch: EventEmitter<any> = new EventEmitter();

  public hideDropdown = true;

  public selected: string;

  public hash: string = this.generateRandomId();

  private ctrlValue: any = '';

  constructor() { }

  ngOnInit(): void {}

  get value() {
    return this.ctrlValue;
  }

  set value(value: any) {
    this.ctrlValue = value;
  }

  onChange: any = () => {};
  onTouch: any = () => {};


  writeValue(value: any): void {
    this.updateValues(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public isSelected(value: string) {
    return this.selected === value ? 'selected' : '';
  }

  public onClickSearch() {
    this.onsearch.emit();
  }

  public onInput(event: any) {
    let value: string = event.target.value;
    value = value.trim();
    this.updateValues(value);
  }

  public onClickDropdown() {
    this.hideDropdown = !this.hideDropdown;
  }

  public onClickOptions(value: string) {
    this.handleSelectDropdownOptions(value);
    this.hideDropdown = !this.hideDropdown;
    this.onselect.emit(this.selected);
  }

  public isDisabled() {
    return this.disabled ? '' : null;
  }

  public isButtonsDisabled() {
    return this.disabled === true && this.disableOnlyInput === false ?  '' : null;
  }

  private handleSelectDropdownOptions(value: string) {
    if (this.selected && this.selected === value) {
      this.selected = null;
    } else {
      this.selected = value;
    }
  }

  private updateValues(value: any) {
    this.value = value;
    this.onChange(value);
    this.onTouch(value);
  }

  private generateRandomId() {
    return Math.random().toString(36).substr(2, 5);
  }

}
