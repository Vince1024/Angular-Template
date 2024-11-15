import { Component, OnInit  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-language-manager',
  templateUrl: './language-manager.component.html',
  styleUrl: './language-manager.component.scss'
})

export class LanguageManagerComponent {

  selectedLang: string = "en-US";
  installedLanguages: string[];

  constructor(private translate: TranslateService){
    this.translate.addLangs(['en-US', 'fr-FR', 'es-ES', 'de-DE']);
    this.translate.setDefaultLang('en-US');
    this.translate.use('en-US');
  
    this.installedLanguages = this.translate.getLangs();
    this.selectedLang = this.translate.currentLang;
  }
  
  switchLanguage(language: string) {
    this.translate.use(language);
    this.selectedLang = language;
  }
  
  getInstalledLanguages() {
    return this.translate.getLangs();
  }

  radioChange(event: MatRadioChange) {
    console.log(event.value);
    this.switchLanguage(event.value);
  }

}
