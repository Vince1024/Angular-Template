import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { LoggerService, logLevel } from './logger.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(public globalService: GlobalService, private router: Router, private logger: LoggerService) 
  {
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe();
   }

    signIn(user: string, pass: string) {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    this.globalService.Vars.value.user.login_Name = user;
                    this.globalService.Vars.value.user.isAuth = true;
                    this.logger.log(logLevel.Info, 'Authentication Success for user [' + this.globalService.Vars.value.user.login_Name + '] with role [' + this.globalService.Vars.value.user.role + ']', AuthenticationService.name);
                    this.router.navigate(['template']);
                    resolve(true);
                }, 2000
            )
            }
        )
    }

    signOut(user: string) {
        this.globalService.Vars.value.user.login_Name = '';
        this.globalService.Vars.value.user.isAuth = false;
        this.logger.log(logLevel.Info, 'Logout Success for user [' + user + ']', AuthenticationService.name);
        this.router.navigate(['authentication']);
    }

  
}
