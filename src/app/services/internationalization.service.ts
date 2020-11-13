import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


// os arquivos de configuração estão em assets/i18n/<file>

@Injectable({
  providedIn: 'root',
})
export class InternationalizationService {
  constructor(private translateService: TranslateService) {}

  checkLanguageBrowser() {
    const userLang = navigator.language;
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');

    if (userLang.indexOf('en') > -1) {
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.translateService.use('en');
    } else if (userLang.indexOf('pt-BR') > -1) {
      this.translateService.use('pt-BR');
    } else {
      this.translateService.use('en');
    }
  }

  setLanguage(language) {
    this.translateService.use(language);
  }
}
