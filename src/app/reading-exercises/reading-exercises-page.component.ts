import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { WordBankService } from '../shared/services/word-bank.service';

@Component({
  selector: 'app-reading-exercises-page',
  templateUrl: './reading-exercises-page.component.html',
  styleUrls: ['./reading-exercises-page.component.scss']
})
export class ReadingExercisesPageComponent implements OnInit {
  content = [];
  learned = true;

  constructor(private dataService: DataService,
              private wordBank: WordBankService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      const words = data.content.split(' ');
      this.content = this.wordBank.getLearnedFlagOfContent(words);
    });
  }

  searchWord(spanishWord: string) {
    this.dataService.getWordApi(spanishWord).subscribe(data => {
      console.log(data);
      debugger;
    });
  }

  displayWordBank(): void {
    console.log(this.wordBank.getWordBank());
  }

}
