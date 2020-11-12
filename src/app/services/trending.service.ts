import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private urlTMDb: string = environment.url_api_TMDb;

  constructor(private http: HttpClient) { }

  public getTrending(mediaType = 'all', timeWindow = 'day') {
    return this.http.get(this.urlTMDb + `/trending/${mediaType}/${timeWindow}?api_key=${environment.apiKey}&language=en-US`, httpOptions);
  }
}
