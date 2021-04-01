import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WordBankService } from '../services/word-bank.service';
import { SentenceComponent } from './sentence/sentence.component';
import { WordComponent } from './word/word.component';



@NgModule({
  declarations: [
    WordComponent,
    SentenceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WordComponent,
    SentenceComponent
  ],
  providers: [
    WordBankService
  ]
})
export class SharedModule { }
