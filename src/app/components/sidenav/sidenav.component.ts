import { Component, HostListener } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { SidenavService } from '../../services/sidenav.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  /**
   * This stores the state of the resizing event and is updated
   * as events are fired.
   */
  resizingEvent = {
    isResizing: false,
    startingCursorX: 0,
    startingWidth: 0,
  };

  constructor(
    public globalService: GlobalService,
    private authenticationService: AuthenticationService,
    public sidenavService: SidenavService
  ){
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe()
  }

  logOut(user: string){
    this.authenticationService.logout(user);
  }

  startResizing(event: MouseEvent): void {
    this.resizingEvent = {
      isResizing: true,
      startingCursorX: event.clientX,
      startingWidth: this.sidenavService.sidenavWidth,
    };
  }

/*
 * This method runs when the mouse is moved anywhere in the browser
 */
@HostListener('window:mousemove', ['$event'])
updateSidenavWidth(event: MouseEvent) {
  // No need to even continue if we're not resizing
  if (!this.resizingEvent.isResizing) {
    return;
  }

  // 1. Calculate how much mouse has moved on the x-axis
  const cursorDeltaX = event.clientX - this.resizingEvent.startingCursorX;

  // 2. Calculate the new width according to initial width and mouse movement
  const newWidth = this.resizingEvent.startingWidth + cursorDeltaX;

  // 3. Set the new width
  this.sidenavService.setSidenavWidth(newWidth);
}

@HostListener('window:mouseup')
stopResizing() {
  // this.globalService.Vars.value.openNav=!this.globalService.Vars.value.openNav;
  // this.globalService.Vars.value.openNav=!this.globalService.Vars.value.openNav;
  this.resizingEvent.isResizing = false;
}

}
