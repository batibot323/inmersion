import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { WordBankService } from '../../services/word-bank.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  @Input() word: string;
  @Input() learned: boolean;

  constructor(private dataService: DataService,
    private wordBank: WordBankService) { }

  ngOnInit(): void {
  }

  searchWord(word?: string) {
    word = word || this.word;
    this.dataService.getWordApi(word).subscribe(data => {
      if (data[0].shortdef !== undefined) {
        console.log(data[0].shortdef);
      } else {
        this.searchWord(data[0]);
      }
    })
  }

  toggleLearn() {
    this.learned = !this.learned;
    this.learned ? this.wordBank.learnWord(this.cleanWord(this.word)) : this.wordBank.unlearnWord(this.cleanWord(this.word));
  }

  test() {
    this.searchWord();
    // return false;
  }

  cleanWord(word: string): string {
    return this.wordBank.cleanWord(word);
  }

}
