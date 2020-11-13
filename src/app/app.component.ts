import { Component, OnInit } from '@angular/core';
import { VersionCheckService } from './services/version-check.service';
import { environment } from '../environments/environment';
import { Shared } from './shared/shared';
import { InternationalizationService } from './services/internationalization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  urlVersionFile = environment.urlVersionFile;

  constructor(
    private _versionCheckService: VersionCheckService,
    private _internationalizationService: InternationalizationService
  ) { }

  ngOnInit() {
    this._versionCheckService.initVersionCheck(this.urlVersionFile);

    this._versionCheckService.checkVersionOnInitApp(this.urlVersionFile);

    this._internationalizationService.checkLanguageBrowser();
  }
}
