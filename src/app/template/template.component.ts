import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

  constructor (public globalService: GlobalService){
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe(
  );

  }

}
