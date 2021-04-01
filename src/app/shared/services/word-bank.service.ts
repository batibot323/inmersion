import { Injectable } from '@angular/core';
import { Word } from '../models/word.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class WordBankService {
  private wordBank: Word[];

  constructor(private data: DataService) {
    debugger;
    this.data.getWordBank().subscribe(data => {
      this.wordBank = data;
    });
  }

  getLearnedFlagOfContent(content: string[]): Word[] {
    debugger;
    let words: Word[] = [];
    content.forEach(word => {
      words.push({ word, learned: this.wordBank.find(bankedWord => bankedWord.word === word)?.learned || false });
    });
    return words;
  }

  learnWord(word: string): void {
    debugger;
    const matchedIndex = this.wordBank.findIndex(bankedWord => bankedWord.word === word);
    matchedIndex > -1 ? this.wordBank[matchedIndex].learned = true : this.wordBank.push({ word, learned: true });
  }

  unlearnWord(word: string): void {
    const matchedIndex = this.wordBank.findIndex(bankedWord => bankedWord.word === word);
    matchedIndex > -1? this.wordBank[matchedIndex].learned = false : null;
  }

  getWordBank(): Word[] {
    return this.wordBank;
  }
}
