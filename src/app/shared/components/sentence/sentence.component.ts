import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Word } from '../../models/word.model';
import { WordBankService } from '../../services/word-bank.service';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent implements OnInit, OnChanges {
  @Input() sentence: string;
  words: Word[];

  constructor(private wordBank: WordBankService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.sentence) {
      this.words = this.wordBank.getLearnedFlagOfContent(this.sentence.split(' '));
    }
  }

}
