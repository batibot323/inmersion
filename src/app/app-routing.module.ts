import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadingExercisesPageComponent } from './reading-exercises/reading-exercises-page.component';
import { WordBankResolver } from './shared/resolvers/word-bank.resolver';

const routes: Routes = [
  { path: 'reading', component: ReadingExercisesPageComponent, resolve: { wordBank: WordBankResolver } },
  { path: '', redirectTo: '/reading', pathMatch: 'full' },
  { path: '**', component: ReadingExercisesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
