import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, forwardRef, ElementRef, ViewChildren, ContentChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {

  @Input()
  public label: string;

  @Input()
  public inputName: string;

  @Input()
  public inputId: string;

  @Input()
  public onlyNumber: boolean;

  @Input()
  public type: 'text' | 'password' = 'text';

  @Input()
  public disabled: boolean;

  public hash: string = this.generateRandomId();

  private ctrlValue: any = '';

  constructor() { }

  get value() {
    return this.ctrlValue;
  }

  set value(value: any) {
    this.ctrlValue = value;
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  ngOnInit(): void {}

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

  public onInput(event: any) {
    let value: string = event.target.value;
    value = value.trim();
    this.updateValues(value);
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
