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

    User: '',
    isAuth: false,
    userLanguage: '',
    userTheme: 'azure-blue'
  });

  loadLocalStorage() {
    this.Vars.value.userLanguage = (this.localStorageService.get('userLanguage') || 'en-US');
    this.Vars.value.userTheme = (this.localStorageService.get('userTheme') || 'azure-blue');
    this.logger.log(logLevel.Info, 'LocalStorage Loaded', GlobalService.name);
  }
  
  saveLocalStorage() {
    this.localStorageService.set('userLanguage', this.Vars.value.userLanguage);
    this.localStorageService.set('userTheme', this.Vars.value.userTheme);
    this.logger.log(logLevel.Info, 'LocalStorage Saved', GlobalService.name);
  }

}