import { Component, OnInit } from '@angular/core';
import { VersionCheckService } from './services/version-check.service';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  urlVersionFile = environment.urlVersionFile;

  constructor(
    private _versionCheckService: VersionCheckService,
    private translateService: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');
  }

  ngOnInit() {
    this._versionCheckService.initVersionCheck(this.urlVersionFile);

    // check version on init
    if (this.urlVersionFile.indexOf('localhost') === -1) {
      console.log('Checking...');
      this._versionCheckService.checkVersion(this.urlVersionFile);
    }
  }
}
