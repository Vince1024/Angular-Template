import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatRadioChange } from '@angular/material/radio';
import { GlobalService } from '../../services/global.service';
import { LoggerService, logLevel } from '../../services/logger.service';

@Component({
    selector: 'app-language-manager',
    templateUrl: './language-manager.component.html',
    styleUrl: './language-manager.component.scss',
    standalone: false
})

export class LanguageManagerComponent {

  installedLanguages: string[];

  constructor(
    private translate: TranslateService,
    public globalService: GlobalService,
    private logger: LoggerService
  ){
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe();

    this.translate.addLangs(['en-US', 'fr-FR', 'es-ES', 'de-DE']);
    this.translate.setDefaultLang('en-US');

    this.installedLanguages = this.getInstalledLanguages();
    this.switchLanguage(this.globalService.Vars.value.user.language || 'en-US');
  }
  
  switchLanguage(language: string) {
    this.translate.use(language);
    this.globalService.Vars.value.user.language = language;
    this.logger.log(logLevel.Info, "Language set to [" + this.globalService.Vars.value.user.language + "]", LanguageManagerComponent.name);
    this.globalService.saveLocalStorage();
  }
  
  getInstalledLanguages() {
    return this.translate.getLangs();
  }

  radioChange(event: MatRadioChange) {
    this.switchLanguage(event.value);
  }

}
