import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public globalService: GlobalService, private router: Router) 
  {
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe();
   }

  isAuth = false;

    signIn(user: string, pass: string) {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    this.isAuth = true;
                    this.globalService.Vars.value.username = user;
                    this.globalService.Vars.value.isAuth = true;
                    console.log('Authentication Success for user [' + user + ']');
                    this.router.navigate(['template']);
                    resolve(true);
                }, 2000
            )
            }
        )
    }

    signOut(user: string) {
        this.isAuth = false;
        this.globalService.Vars.value.username = '';
        this.globalService.Vars.value.isAuth = false;
        console.log('Authentication Success for user [' + user + ']');
        this.router.navigate(['authentication']);
    }

  
}
