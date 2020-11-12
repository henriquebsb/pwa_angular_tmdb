import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { environment } from '../../../../environments/environment';

import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  _enviroment = environment;
  constructor(
    private _serviceAuthentication: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  temporaryTokenPermissionOnClick() {
    this._serviceAuthentication.getTemporaryTokenPermission().subscribe(
      data => {
        this._serviceAuthentication.temporaryTokenPermission = data;
        console.log(this._serviceAuthentication.temporaryTokenPermission.request_token);
        const request_token = this._serviceAuthentication.temporaryTokenPermission.request_token;
        this._router.navigate(['https://www.themoviedb.org/authenticate/' + request_token]);
      },
      error => {
        alert(error);
      }
    );
  }
}
