import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})

export class AppComponent {

  title = '';
  openNav = false;

  constructor (public globalService: GlobalService){
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe(
  );

    this.title = this.globalService.Vars.value.title;

  }

}