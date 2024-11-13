import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from "@angular/material/menu";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from "@angular/material/toolbar";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MainTopMenuComponent } from './main-top-menu/main-top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTopMenuComponent
  ],
  imports: [
    AppRoutingModule,
    MatDivider,
    BrowserModule,
    MatButton,
    MatButtonModule,
    MatIcon,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  cssImports = './Themes/themes.scss'
}
