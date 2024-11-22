import { Component, Renderer2 } from '@angular/core';
import { Theme } from '../services/theme';
import { ThemeService } from '../services/theme.service';
import { MatRadioChange } from '@angular/material/radio';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-theme-manager',
  templateUrl: './theme-manager.component.html',
  styleUrl: './theme-manager.component.scss'
})
export class ThemeManagerComponent {

  themeArr: Theme[];

  constructor(
    public globalService: GlobalService,
    private themeService: ThemeService,
    private renderer2: Renderer2,
  ) 
  
  {
    // Subscribe and listen for any changes
    this.globalService.Vars.subscribe();

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
    this.themeService.setTheme(this.globalService.Vars.value.currentTheme, this.renderer2);
  }

  changeTheme(theme: Theme) {
    this.themeService.setTheme(theme, this.renderer2);
    this.globalService.Vars.value.currentTheme = this.themeService.currentTheme;
    this.globalService.saveLocalStorage();
  }

  radioChange(event: MatRadioChange) {
    this.changeTheme(event.value);
  }

}
