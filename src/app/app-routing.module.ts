import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadingExercisesPageComponent } from './reading-exercises/reading-exercises-page.component';

const routes: Routes = [
  { path: 'reading', component: ReadingExercisesPageComponent },
  { path: '', redirectTo: '/reading', pathMatch: 'full' },
  { path: '**', component: ReadingExercisesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
