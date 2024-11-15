import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-manager',
  templateUrl: './language-manager.component.html',
  styleUrl: './language-manager.component.scss'
})

export class LanguageManagerComponent {

  installedLanguages: string[];

  constructor(private translate: TranslateService){
    this.translate.addLangs(['en-US', 'fr-FR', 'es-ES', 'de-DE']);
    this.translate.setDefaultLang('en-US');
    this.translate.use(this.translate.getBrowserCultureLang() || 'en-US');
  
    this.installedLanguages = this.getInstalledLanguages();
  }
  
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  
  getInstalledLanguages() {
    return this.installedLanguages;
  }

}
