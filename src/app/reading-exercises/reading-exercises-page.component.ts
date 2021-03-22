import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-reading-exercises-page',
  templateUrl: './reading-exercises-page.component.html',
  styleUrls: ['./reading-exercises-page.component.scss']
})
export class ReadingExercisesPageComponent implements OnInit {
  content: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.content = data.content;
      debugger;
    })
  }

}
