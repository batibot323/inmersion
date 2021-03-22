import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('data/reading/exercise-01.json');
  }

  getWordApi(spanishWord: string) {
    const url = `https://dictionaryapi.com/api/v3/references/spanish/json/${spanishWord}?key=${environment.apiKey}`;
    return this.http.get<any>(url);
  }
}
