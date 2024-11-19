import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'Angular Template';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `Themes/${styleName}`; //<--add assets
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      // style.type = 'text/html';
      style.href = `Themes/${styleName}`; //<--add assets

      head.appendChild(style);
      console.log('Theme ' + styleName + ' loaded')
    }
  }

}
// <link id="client-theme" rel="stylesheet" type="text/html" href="Themes/purple-green.css">