import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatRadioChange } from '@angular/material/radio';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-language-manager',
  templateUrl: './language-manager.component.html',
  styleUrl: './language-manager.component.scss'
})

export class LanguageManagerComponent {

  //currentLang: string;
  installedLanguages: string[];

  constructor(
    private translate: TranslateService,
    public globalService: GlobalService
  ){
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe(
      // {
      // next: newValue => this.currentLang = this.globalService.Vars.value.currentLanguage
      // }
  );

    this.translate.addLangs(['en-US', 'fr-FR', 'es-ES', 'de-DE']);
    this.translate.setDefaultLang('en-US');

    this.installedLanguages = this.getInstalledLanguages();
    //this.currentLang = this.globalService.Vars.value.currentLanguage;

    //this.switchLanguage(this.currentLang ||'en-US');
    this.switchLanguage(this.globalService.Vars.value.currentLanguage ||'en-US');
  }
  
  switchLanguage(language: string) {
    this.translate.use(language);
    this.globalService.Vars.value.currentLanguage = language;
    //this.currentLang = this.globalService.Vars.value.currentLanguage;
  }
  
  getInstalledLanguages() {
    return this.translate.getLangs();
  }

  radioChange(event: MatRadioChange) {
    this.switchLanguage(event.value);
  }

}
