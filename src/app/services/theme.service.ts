import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { LoggerService, logLevel } from './logger.service';

export enum Theme {
  AZURE_BLUE = 'azure-blue',
  CYAN_ORANGE = 'cyan-orange',
  DEEPPURPLE_AMBER = 'deeppurple-amber',
  INDOGO_PINK = 'indigo-pink',
  MAGENTA_VIOLET = 'magenta-violet',
  PINK_BLUEGREY = 'pink-bluegrey',
  PURPLE_GREEN = 'purple-green',
  ROSE_RED = 'rose-red',
  RED_LIGHT = 'red-light',
  RED_DARK = 'red-dark',
  GERRN_LIGHT = 'green-light',
  GREEN_DARK = 'green-dark',
  BLUE_LIGHT = 'blue-light',
  BLUE_DARK = 'blue-dark'
}

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private style: HTMLLinkElement | undefined;
  private cssFile: string | undefined;
  private themeCSSID: string = 'themeCSS';

  constructor(
    @Inject(DOCUMENT) private document: Document, private logger: LoggerService
  ) { }

  setTheme(theme: Theme, renderer2: Renderer2) {
    this.cssFile = `${theme}.css`;
    this.removeExistingThemeStyle(renderer2, this.themeCSSID);
    
    // Create a link element via Angular's renderer to avoid SSR troubles
    this.style = renderer2.createElement('link') as HTMLLinkElement;

    // Set type of the link item and path to the css file
    renderer2.setProperty(this.style, 'rel', 'stylesheet');
    renderer2.setProperty(this.style, 'href', this.cssFile);
    renderer2.setProperty(this.style, 'id', this.themeCSSID);

    // Add the style to the head section
    renderer2.appendChild(this.document.head, this.style);

    this.logger.log(logLevel.Info, 'Theme Set to [' + theme + ']', ThemeService.name);
  }

  removeExistingThemeStyle(renderer2: Renderer2, themeCSSID: string) {
    const themeIDHTMlElem = this.document.getElementById(themeCSSID);
    if (themeIDHTMlElem) {
      renderer2.removeChild(this.document.head, themeIDHTMlElem);
    }
  }
}