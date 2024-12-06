import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})

export class AboutComponent {

  constructor(public globalService: GlobalService) { 
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe();
  }

}
