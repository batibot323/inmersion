import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-reading-exercises-page',
  templateUrl: './reading-exercises-page.component.html',
  styleUrls: ['./reading-exercises-page.component.scss']
})
export class ReadingExercisesPageComponent implements OnInit {
  content: string;
  learned = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.content = data.content;
    });
  }

  searchWord(spanishWord: string) {
    this.dataService.getWordApi(spanishWord).subscribe(data => {
      console.log(data);
      debugger;
    });
  }

}
