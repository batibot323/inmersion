import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WordComponent } from './word/word.component';



@NgModule({
  declarations: [WordComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WordComponent
  ]
})
export class SharedModule { }
