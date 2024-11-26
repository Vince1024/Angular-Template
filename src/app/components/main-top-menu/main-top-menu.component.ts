import { Component, Input, inject, signal } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-main-top-menu',
  templateUrl: './main-top-menu.component.html',
  styleUrl: './main-top-menu.component.scss'
})
export class MainTopMenuComponent {

  constructor(public globalService: GlobalService,private authenticationService: AuthenticationService) 
  {
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe();
   }

  @Input() menuTitle = "";

  logOut(user: string){
    this.authenticationService.signOut(user);
  }

}
