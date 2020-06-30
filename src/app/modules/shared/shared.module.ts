import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    InputTextComponent,
    ButtonComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextComponent,
    ButtonComponent,
    TitleComponent
  ]
})
export class SharedModule { }
