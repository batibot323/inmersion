import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(id?: number | string): Observable<any> {
    id = id || 1;
    id = id < 10 ? `0${id}` : id; 
    return this.http.get<any>(`data/reading/exercise-${id}.json`);
  }

  getWordBank() {
    return this.http.get<any>('data/word-bank/word-bank-01.json');
  }

  getWordApi(spanishWord: string) {
    const url = `https://dictionaryapi.com/api/v3/references/spanish/json/${spanishWord}?key=${environment.apiKey}`;
    return this.http.get<any>(url);
  }
}
