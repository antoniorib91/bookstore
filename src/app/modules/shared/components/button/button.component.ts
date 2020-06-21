import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input()
  public type: 'button' | 'submit' = 'button';

  @Input()
  public color: 'blue' | 'gray' | 'yellow' = 'blue';

  @Input()
  public size: 'normal' | 'auto' = 'auto';

  constructor() { }

  ngOnInit(): void {
  }

}
