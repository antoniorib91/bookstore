import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, forwardRef, ElementRef, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
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
  public Name: string;

  @Input()
  public Id: string;

  @Input()
  public type: 'text' | 'password' = 'text';

  @Input()
  public disabled: boolean;

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

}
