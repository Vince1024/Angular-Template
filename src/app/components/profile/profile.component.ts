import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor (public globalService: GlobalService){
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe(
  );
}

}
