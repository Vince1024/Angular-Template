import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-top-menu',
  templateUrl: './main-top-menu.component.html',
  styleUrl: './main-top-menu.component.scss'
})
export class MainTopMenuComponent {

  @Input() menuTitle = "";

}
