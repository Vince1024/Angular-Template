import { Component, Input, inject } from '@angular/core';
import { ThemeManagerService } from '../services/theme-manager.service';

@Component({
  selector: 'app-main-top-menu',
  templateUrl: './main-top-menu.component.html',
  styleUrl: './main-top-menu.component.scss'
})
export class MainTopMenuComponent {

  @Input() menuTitle = "";

  private themeManager = inject(ThemeManagerService);
    theme = this.themeManager.theme;

    toggleTheme() {
      this.themeManager.toggleTheme();
    }

}
