import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

// import Material Design
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from "@angular/material/toolbar";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

//Global
import { GlobalService } from './services/global.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MainTopMenuComponent } from './main-top-menu/main-top-menu.component';
import { ThemeManagerComponent } from './theme-manager/theme-manager.component';
import { LanguageManagerComponent } from './language-manager/language-manager.component';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationService,
    AuthenticationComponent,
    MainTopMenuComponent,
    LanguageManagerComponent,
    TemplateComponent,
    ThemeManagerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GlobalService,
    TranslateModule.forRoot({
        loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
                }
    }),
    MatButton,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDivider,
    MatGridListModule,
    MatIcon,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
  cssImports = './Themes/themes.scss'
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}
