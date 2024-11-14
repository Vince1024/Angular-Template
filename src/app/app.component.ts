import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'Angular Template';
  Lang = '';

constructor(private translate: TranslateService){
  this.translate.addLangs(['en-US', 'fr-FR']);
  this.translate.setDefaultLang('en-US');
  // this.translate.use(this.translate.getBrowserCultureLang() || 'en-US');
  this.translate.use('en-US')
  this.Lang = (this.translate.getBrowserCultureLang() || 'en-US');
}

switchLanguage(language: string) {
  this.translate.use(language);
}

}