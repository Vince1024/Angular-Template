import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, timestamp } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { LoggerService, logLevel } from './logger.service';
import { User } from '../class/user';
import { Roles } from '../class/roles';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  
  private readonly localStorageService = inject(LocalStorageService);

  constructor(private logger: LoggerService
  ){
    this.loadLocalStorage();
  }

  public usr: User = { loginName: '', isAuth: false, role: Roles.NONE };

  public Vars = new BehaviorSubject<any>({
    title: 'Angular Template',
    version: '1.0.0',

    user: this.usr
    // User: '',
    // isAuth: false,
    // userLanguage: '',
    // userTheme: 'azure-blue'
  });

  loadLocalStorage() {
    this.Vars.value.user.language = (this.localStorageService.get('user.language') || 'en-US');
    this.Vars.value.user.theme = (this.localStorageService.get('user.theme') || 'azure-blue');
    // this.Vars.value.userLanguage = (this.localStorageService.get('userLanguage') || 'en-US');
    // this.Vars.value.userTheme = (this.localStorageService.get('userTheme') || 'azure-blue');
    console.log(this.Vars.value.user);
    this.logger.log(logLevel.Info, 'LocalStorage Loaded', GlobalService.name);
  }
  
  saveLocalStorage() {
    this.localStorageService.set('user.language', this.Vars.value.user.language);
    this.localStorageService.set('user.theme', this.Vars.value.user.theme);
    // this.localStorageService.set('userLanguage', this.Vars.value.userLanguage);
    // this.localStorageService.set('userTheme', this.Vars.value.userTheme);
    this.logger.log(logLevel.Info, 'LocalStorage Saved', GlobalService.name);
  }

}