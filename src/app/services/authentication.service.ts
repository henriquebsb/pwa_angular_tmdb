import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlTMDb: string = environment.url_api_TMDb;
  private _headers = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  set temporaryTokenPermission(temporaryTokenPermission: any) {
    window.localStorage.setItem('temporaryTokenPermission', JSON.stringify(temporaryTokenPermission));
  }

  get temporaryTokenPermission() {
    return JSON.parse(window.localStorage.getItem("temporaryTokenPermission"));
  }

  public getTemporaryTokenPermission() {
    // temporary token that is required to ask the user for permission to access their account.
    // this token will auto expire after 60 minutes if it's not used.
    return this.http.get<any>(
      this.urlTMDb + '/authentication/token/new?api_key=' + environment.apiKey,
      this._headers
    );
  }

  public logout() {
    this._router.navigate(['/']);
    window.localStorage.removeItem("temporaryTokenPermission");
  }
}
