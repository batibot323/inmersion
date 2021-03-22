import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-reading-exercises-page',
  templateUrl: './reading-exercises-page.component.html',
  styleUrls: ['./reading-exercises-page.component.scss']
})
export class ReadingExercisesPageComponent implements OnInit {
  content = [];
  learned = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      const words = data.content.split(' ');
      words.forEach(word => {
        this.content.push({ word : word, learned: true })
      });
      debugger;
    });
  }

  searchWord(spanishWord: string) {
    this.dataService.getWordApi(spanishWord).subscribe(data => {
      console.log(data);
      debugger;
    });
  }

}
