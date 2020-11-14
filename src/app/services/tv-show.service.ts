import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private urlTMDb: string = environment.url_api_TMDb;

  constructor(private http: HttpClient) { }

  public getPopular(page = 1): Observable<any> {
    return this.http.get(this.urlTMDb + `/tv/popular?api_key=${environment.apiKey}&language=en-US&page=${page}`, httpOptions);
  }
}
