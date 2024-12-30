import { importProvidersFrom, inject, Injectable } from '@angular/core';
import { BehaviorSubject, timestamp } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { LoggerService, logLevel } from './logger.service';
import { version, dependencies } from '../../../package.json';
import { User } from '../class/user';
import { Roles } from '../class/roles';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  
  private readonly localStorageService = inject(LocalStorageService);

  constructor(private logger: LoggerService
  ){
    //this.localStorageService.clear();
    this.loadLocalStorage();
  }

  public version: string = version;
  public depends = dependencies;
  public usr: User = { login_Name: '', isAuth: false, role: Roles.NONE };

  public Vars = new BehaviorSubject<any>({
    title: 'Angular Template',
    version: this.version,

    openNav: false,
    user: this.usr
  });

  loadLocalStorage() {
    this.Vars.value.user = (this.localStorageService.get('user') || this.usr );
    this.logger.log(logLevel.Info, 'LocalStorage Loaded', GlobalService.name);
    this.logger.log(logLevel.Info, this.Vars.value, GlobalService.name);
  }
  
  saveLocalStorage() {
    this.localStorageService.set('user', this.Vars.value.user);
    this.logger.log(logLevel.Info, this.Vars.value, GlobalService.name);
    this.logger.log(logLevel.Info, 'LocalStorage Saved', GlobalService.name);
  }

}