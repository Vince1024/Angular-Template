import { Component, Renderer2 } from '@angular/core';
import { Theme } from '../services/theme';
import { ThemeService } from '../services/theme.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-theme-manager',
  templateUrl: './theme-manager.component.html',
  styleUrl: './theme-manager.component.scss'
})
export class ThemeManagerComponent {

  themeArr: Theme[];
  currentTheme = '';

  constructor(
    private themeService: ThemeService,
    private renderer2: Renderer2,
  ) {
    this.themeArr = [ Theme.AZURE_BLUE, 
                      Theme.CYAN_ORANGE, 
                      Theme.DEEPPURPLE_AMBER, 
                      Theme.INDOGO_PINK, 
                      Theme.MAGENTA_VIOLET, 
                      Theme.PINK_BLUEGREY, 
                      Theme.PURPLE_GREEN, 
                      Theme.ROSE_RED,
                      Theme.RED_LIGHT,
                      Theme.RED_DARK,
                      Theme.GERRN_LIGHT,
                      Theme.GREEN_DARK,
                      Theme.BLUE_LIGHT,
                      Theme.BLUE_DARK
                    ];
    // console.log('themeArr => ', this.themeArr);
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.themeService.setTheme(Theme.AZURE_BLUE, this.renderer2);
    this.currentTheme = this.themeService.currentTheme;
  }

  changeTheme(theme: Theme) {
    this.themeService.setTheme(theme, this.renderer2);
    this.currentTheme = this.themeService.currentTheme;
  }

  radioChange(event: MatRadioChange) {
    // console.log(event.value);
    this.changeTheme(event.value);
  }

}
