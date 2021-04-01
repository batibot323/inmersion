import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { WordBankService } from "../services/word-bank.service";

@Injectable({ providedIn: 'root' })
export class WordBankResolver implements Resolve<any> {
    constructor(private wordBank: WordBankService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        this.wordBank.setWordBank();
        return of(true);
    }
}