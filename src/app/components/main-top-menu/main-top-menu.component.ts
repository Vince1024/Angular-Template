import { Component, Input, inject, signal, viewChild } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { AuthenticationService } from '../../services/authentication.service';
import { AboutComponent } from '../about/about.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';

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
    this.authenticationService.logout(user);
  }

  readonly menuTrigger = viewChild.required(MatMenuTrigger);
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(AboutComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger().focus());
  }

}
