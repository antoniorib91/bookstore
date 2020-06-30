import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputOnlyNumberDirective } from './directives/input-only-number.directive';


@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
    InputSearchComponent,
    InputTextComponent,
    InputOnlyNumberDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    TitleComponent,
    InputSearchComponent,
    InputTextComponent,
    InputOnlyNumberDirective
  ]
})
export class SharedModule { }
