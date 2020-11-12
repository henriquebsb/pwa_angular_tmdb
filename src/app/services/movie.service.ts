import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrendingService } from './trending.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private urlTMDb: string = environment.url_api_TMDb;

  constructor(
    private http: HttpClient,
    private serviceTrending: TrendingService
  ) { }

  public getLatest(): Observable<any> {
    return this.http.get(this.urlTMDb + `/movie/latest?api_key=${environment.apiKey}&language=en-US`, httpOptions);
  }

  public getUpComing(page = 1): Observable<any> {
    return this.http.get(this.urlTMDb + `/movie/upcoming?api_key=${environment.apiKey}&language=en-US&page=${page}`, httpOptions);
  }

  public getTrendingWeek() {
    return this.serviceTrending.getTrending('movie', 'week');
  }
}
