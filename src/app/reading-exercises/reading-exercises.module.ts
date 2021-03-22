import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/components/shared.module';
import { ReadingExercisesPageComponent } from './reading-exercises-page.component';



@NgModule({
  declarations: [ReadingExercisesPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [
    ReadingExercisesPageComponent
  ]
})
export class ReadingExercisesModule { }
