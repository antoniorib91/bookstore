import { HostListener, Directive, Input, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputOnlyNumber]'
})
export class InputOnlyNumberDirective {

  @Input()
  private isActive = false;

   constructor(
    private el: ElementRef
  ) {}

  @HostListener('input', ['$event.target.value'])
  public onInput() {
    if (this.isActive) {
      this.el.nativeElement.value = this.el.nativeElement.value.replace( /[^.\d]/g, '');
    }
  }
}
