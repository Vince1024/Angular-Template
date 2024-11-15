import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-manager',
  templateUrl: './language-manager.component.html',
  styleUrl: './language-manager.component.scss'
})
export class LanguageManagerComponent {

  BrowserCultureLang;
  BrowserLang;
  InstalledLanguages;

  constructor(private translate: TranslateService){
    this.translate.addLangs(['en-US', 'fr-FR', 'es-ES', 'de-DE']);
    this.translate.setDefaultLang('en-US');
    this.translate.use(this.translate.getBrowserCultureLang() || 'en-US');
  
    this.BrowserCultureLang = (this.translate.getBrowserCultureLang());
    this.BrowserLang = this.translate.getBrowserLang();
    this.InstalledLanguages = this.getInstalledLanguages();
  }
  
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  
  getCurrentLanguage() {
    this.translate.getBrowserLang();
  }
  
  getInstalledLanguages() {
    return this.translate.getLangs();
  }

}
