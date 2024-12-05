import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { LoggerService, logLevel } from './logger.service';
import { Router } from '@angular/router';
import { Roles } from '../class/roles';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

private currentUser: User | null = null;

  constructor(public globalService: GlobalService, private router: Router, private logger: LoggerService) 
  {
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe();
   }

    login(user: string, pass: string) {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    // Fake Auth
                    this.currentUser = { login_Name: user, isAuth: true, role: Roles.USER, lastAccess: new Date(), first_Name: 'Vincent',last_Name: 'PAPUCHON', language: this.globalService.Vars.value.user.language, theme: this.globalService.Vars.value.user.theme };
                    //
                    this.globalService.Vars.value.user = this.currentUser;
                    this.logger.log(logLevel.Info, 'Authentication Success for user [' + this.globalService.Vars.value.user.login_Name + '] with role [' + this.globalService.Vars.value.user.role + ']', AuthenticationService.name);
                    this.router.navigate(['template']);
                    resolve(true);
                }, 2000
            )
            }
        )
    }

    logout(user: string) {
        this.globalService.Vars.value.user.login_Name = '';
        this.globalService.Vars.value.user.isAuth = false;
        this.globalService.Vars.value.user.role = Roles.NONE;

        this.logger.log(logLevel.Info, 'Logout Success for user [' + user + ']', AuthenticationService.name);
        this.router.navigate(['authentication']);
    }

    public get currentUserValue() {
        return this.globalService.Vars.value.user;
    }

    public isAuthorized(allowedRoles: string[]): boolean {
        const user = this.globalService.Vars.value.user;
        this.logger.log(logLevel.Info, 'isAuthorized for user [' + user.login_Name + ']', AuthenticationService.name);
        if (!user) return false;
        return allowedRoles.includes(user.role);
      }
  
}
