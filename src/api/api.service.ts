import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Hero} from '../model/hero.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //URL
  url = 'https://api.opendota.com/api/heroes'
  constructor(private httpClient: HttpClient) {}

  getHeroes() : Observable<Hero> {
    return this.httpClient.get<Hero>(this.url)
    .pipe(
      retry(1)
    )
  }
}
