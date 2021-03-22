import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  @Input() word: string;
  @Input() learned: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  searchWord() {
    this.dataService.getWordApi(this.word).subscribe(data => {
      debugger;
      if (data[0].shortdef !== undefined) {
        console.log(data.shortdef);
      } else {
        console.log(data);
      }
    })
  }

}
