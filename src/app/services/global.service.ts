import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, timestamp } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { LoggerService, logLevel } from './logger.service';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  
  private readonly localStorageService = inject(LocalStorageService);

  constructor(private logger: LoggerService
  ){
    this.loadLocalStorage();
  }

  public Vars = new BehaviorSubject<any>({
    title: 'Angular Template',
    version: '1.0.0',

    currentUser: '',
    isAuth: false,
    currentLanguage: '',
    currentTheme: 'azure-blue'
  });

  loadLocalStorage() {
    this.Vars.value.currentLanguage = (this.localStorageService.get('currentLanguage') || 'en-US');
    this.Vars.value.currentTheme = (this.localStorageService.get('currentTheme') || 'azure-blue');
  }
  
  saveLocalStorage() {
    this.localStorageService.set('currentLanguage', this.Vars.value.currentLanguage);
    this.localStorageService.set('currentTheme', this.Vars.value.currentTheme);
  }

}