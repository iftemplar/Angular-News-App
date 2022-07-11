import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  fetchNews() {
    this.http.get('https://free-news.p.rapidapi.com/v1/search',
      {headers: new HttpHeaders({
          'x-rapidapi-key': '03aa2894c7msh5f8a1b20eddf27dp19770ejsn6f0c76286d28',
          'x-rapidapi-host': 'free-news.p.rapidapi.com'
        }),
        params: {q: 'Ukraine', lang: 'en'}}
    )
      .subscribe(data => console.log(data));
  }
}
