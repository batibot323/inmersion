import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReadingExercisesPageComponent } from './reading-exercises-page.component';



@NgModule({
  declarations: [ReadingExercisesPageComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    ReadingExercisesPageComponent
  ]
})
export class ReadingExercisesModule { }
