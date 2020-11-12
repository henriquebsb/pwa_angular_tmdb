import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _serviceAuthentication: AuthenticationService
  ) { }

  ngOnInit(): void {

  }

  temporaryTokenPermissionOnClick() {
    this._serviceAuthentication.getTemporaryTokenPermission().subscribe(
      data => {
        this._serviceAuthentication.temporaryTokenPermission = data;
        console.log(this._serviceAuthentication.temporaryTokenPermission.request_token);
      },
      error => {
        alert(error);
      }
    );
  }

}
