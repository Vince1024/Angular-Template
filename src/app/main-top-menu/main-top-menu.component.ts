import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-top-menu',
  templateUrl: './main-top-menu.component.html',
  styleUrl: './main-top-menu.component.scss'
})
export class MainTopMenuComponent {

  @Input() menuTitle = "";

}
